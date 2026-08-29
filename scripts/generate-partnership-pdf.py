"""Tạo hồ sơ PDF đồng hành từ JSON xuất trực tiếp từ dữ liệu landing page."""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    KeepTogether,
    LongTable,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

PAGE_W, PAGE_H = A4
NAVY = colors.HexColor("#0B1739")
NAVY_2 = colors.HexColor("#173066")
RED = colors.HexColor("#E52C47")
RED_SOFT = colors.HexColor("#FFF0F3")
INK = colors.HexColor("#17243F")
MUTED = colors.HexColor("#5A6881")
LINE = colors.HexColor("#DEE3EC")
PAPER = colors.HexColor("#F7F8FB")


def register_fonts() -> None:
    """Đăng ký font Windows có đầy đủ dấu tiếng Việt."""
    candidates = [
        ("VLU", "arial.ttf", "arialbd.ttf", "ariali.ttf"),
        ("VLU", "segoeui.ttf", "segoeuib.ttf", "segoeuii.ttf"),
    ]
    fonts_dir = Path(os.environ.get("WINDIR", "C:/Windows")) / "Fonts"
    for family, regular, bold, italic in candidates:
        regular_path, bold_path, italic_path = (fonts_dir / regular, fonts_dir / bold, fonts_dir / italic)
        if all(path.exists() for path in (regular_path, bold_path, italic_path)):
            pdfmetrics.registerFont(TTFont(family, str(regular_path)))
            pdfmetrics.registerFont(TTFont(f"{family}-Bold", str(bold_path)))
            pdfmetrics.registerFont(TTFont(f"{family}-Italic", str(italic_path)))
            pdfmetrics.registerFontFamily(
                family,
                normal=family,
                bold=f"{family}-Bold",
                italic=f"{family}-Italic",
                boldItalic=f"{family}-Bold",
            )
            return
    raise FileNotFoundError("Không tìm thấy font Arial hoặc Segoe UI hỗ trợ tiếng Việt.")


def ptext(value) -> str:
    return escape(str(value or "")).replace("\n", "<br/>")


def build_styles():
    base = getSampleStyleSheet()
    return {
        "label": ParagraphStyle("label", parent=base["Normal"], fontName="VLU-Bold", fontSize=8.2, leading=10, textColor=RED, spaceAfter=3, tracking=1.3),
        "h1": ParagraphStyle("h1", parent=base["Heading1"], fontName="VLU-Bold", fontSize=24, leading=28, textColor=NAVY, spaceAfter=9),
        "h2": ParagraphStyle("h2", parent=base["Heading2"], fontName="VLU-Bold", fontSize=16, leading=20, textColor=NAVY, spaceBefore=5, spaceAfter=7),
        "h3": ParagraphStyle("h3", parent=base["Heading3"], fontName="VLU-Bold", fontSize=11.2, leading=14, textColor=INK, spaceAfter=4),
        "body": ParagraphStyle("body", parent=base["BodyText"], fontName="VLU", fontSize=9.2, leading=13.2, textColor=INK, spaceAfter=6),
        "small": ParagraphStyle("small", parent=base["BodyText"], fontName="VLU", fontSize=7.8, leading=10.5, textColor=MUTED),
        "bullet": ParagraphStyle("bullet", parent=base["BodyText"], fontName="VLU", fontSize=8.6, leading=12, textColor=INK, leftIndent=10, firstLineIndent=-7, bulletIndent=0, spaceAfter=2),
        "table": ParagraphStyle("table", parent=base["BodyText"], fontName="VLU", fontSize=7.4, leading=9.6, textColor=INK),
        "table_bold": ParagraphStyle("table_bold", parent=base["BodyText"], fontName="VLU-Bold", fontSize=7.4, leading=9.6, textColor=NAVY),
        "cover_label": ParagraphStyle("cover_label", parent=base["Normal"], fontName="VLU-Bold", fontSize=9, leading=11, textColor=colors.white, alignment=TA_CENTER, tracking=1.8),
    }


def bullet_list(items, styles, limit=None):
    chosen = list(items or [])[:limit] if limit else list(items or [])
    return [Paragraph(f"• {ptext(item)}", styles["bullet"]) for item in chosen]


class ProposalDoc(BaseDocTemplate):
    def __init__(self, filename, data, project_root, **kwargs):
        super().__init__(filename, pagesize=A4, leftMargin=17 * mm, rightMargin=17 * mm, topMargin=20 * mm, bottomMargin=17 * mm, **kwargs)
        self.data = data
        self.project_root = Path(project_root)
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="body")
        self.addPageTemplates([
            PageTemplate(id="cover", frames=[frame], onPage=self.draw_cover),
            PageTemplate(id="content", frames=[frame], onPage=self.draw_content_page),
        ])

    def afterPage(self):
        if self.page == 1:
            self.handle_nextPageTemplate("content")

    def draw_cover(self, canvas, doc):
        canvas.saveState()
        canvas.setFillColor(NAVY)
        canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

        # Dùng JPEG đã tối ưu để ReportLab render ổn định và giữ dung lượng PDF hợp lý.
        hero = self.project_root / "public/images/hoi-khai-giang-2025/6.3.jpg"
        if hero.exists():
            canvas.drawImage(str(hero), 0, PAGE_H * 0.47, width=PAGE_W, height=PAGE_H * 0.53, preserveAspectRatio=True, anchor="c", mask="auto")
            canvas.setFillAlpha(0.52)
            canvas.setFillColor(NAVY)
            canvas.rect(0, PAGE_H * 0.47, PAGE_W, PAGE_H * 0.53, fill=1, stroke=0)
            canvas.setFillAlpha(1)

        logo = self.project_root / "public/images/hoi-khai-giang-2025/Lpgo_VLU.png"
        if logo.exists():
            canvas.drawImage(str(logo), 18 * mm, PAGE_H - 34 * mm, width=36 * mm, height=14 * mm, preserveAspectRatio=True, mask="auto")

        canvas.setFillColor(RED)
        canvas.rect(18 * mm, 101 * mm, 28 * mm, 2.2 * mm, fill=1, stroke=0)
        canvas.setFont("VLU-Bold", 10)
        canvas.setFillColor(colors.HexColor("#FF8A99"))
        canvas.drawString(18 * mm, 94 * mm, "HỒ SƠ ĐỒNG HÀNH · BẢN DỰ THẢO")
        canvas.setFont("VLU-Bold", 28)
        canvas.setFillColor(colors.white)
        canvas.drawString(18 * mm, 78 * mm, "HỘI KHAI GIẢNG")
        canvas.setFont("VLU-Bold", 38)
        canvas.setFillColor(RED)
        canvas.drawString(18 * mm, 61 * mm, "VĂN LANG 2026")
        canvas.setFont("VLU-Italic", 12)
        canvas.setFillColor(colors.HexColor("#D8DFEF"))
        canvas.drawString(18 * mm, 50 * mm, "Khởi đầu hành trình mới cùng Văn Lang")

        canvas.setFont("VLU", 9)
        canvas.setFillColor(colors.HexColor("#AAB6D2"))
        canvas.drawString(18 * mm, 24 * mm, "Tài liệu phục vụ trao đổi và xây dựng phương án hợp tác")
        canvas.drawRightString(PAGE_W - 18 * mm, 24 * mm, "Trung tâm Hỗ trợ Sinh viên")
        canvas.restoreState()

    def draw_content_page(self, canvas, doc):
        canvas.saveState()
        canvas.setFillColor(NAVY)
        canvas.rect(0, PAGE_H - 10 * mm, PAGE_W, 10 * mm, fill=1, stroke=0)
        canvas.setFont("VLU-Bold", 7.5)
        canvas.setFillColor(colors.white)
        canvas.drawString(17 * mm, PAGE_H - 6.4 * mm, "VLU · HỘI KHAI GIẢNG 2026 · HỒ SƠ ĐỒNG HÀNH")
        canvas.setStrokeColor(LINE)
        canvas.line(17 * mm, 12 * mm, PAGE_W - 17 * mm, 12 * mm)
        canvas.setFont("VLU", 7.2)
        canvas.setFillColor(MUTED)
        canvas.drawString(17 * mm, 7.5 * mm, f"Liên hệ: {self.data['event']['email']} · {self.data['event']['phone']}")
        canvas.drawRightString(PAGE_W - 17 * mm, 7.5 * mm, f"Trang {doc.page}")
        canvas.restoreState()


def section_title(label, title, styles, intro=None):
    blocks = [Paragraph(ptext(label).upper(), styles["label"]), Paragraph(ptext(title), styles["h1"])]
    if intro:
        blocks.append(Paragraph(ptext(intro), styles["body"]))
    blocks.append(Spacer(1, 4 * mm))
    return blocks


def add_overview(story, data, styles):
    story.extend(section_title("01 · TỔNG QUAN", "Hội Khai giảng Văn Lang 2026", styles, data["invitation"]["letter"]["paragraphs"][0]))
    metric_cells = []
    for item in data["stats"][:6]:
        metric_cells.append([
            Paragraph(ptext(item["value"]), ParagraphStyle("metric", parent=styles["h2"], textColor=RED, alignment=TA_CENTER, spaceAfter=2)),
            Paragraph(ptext(item["label"]), ParagraphStyle("metric_label", parent=styles["small"], textColor=NAVY, alignment=TA_CENTER)),
        ])
    metric_table = Table([metric_cells[:3], metric_cells[3:]], colWidths=[doc_width() / 3] * 3, rowHeights=[27 * mm, 27 * mm])
    metric_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PAPER), ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7),
    ]))
    story.append(metric_table)
    story.append(Spacer(1, 7 * mm))
    story.append(Paragraph("Cộng đồng tham dự", styles["h2"]))
    audience_rows = []
    for title, desc in data["audiences"]:
        audience_rows.append([Paragraph(ptext(title), styles["table_bold"]), Paragraph(ptext(desc), styles["table"] )])
    story.append(LongTable(audience_rows, colWidths=[48 * mm, doc_width() - 48 * mm], repeatRows=0, style=table_style()))
    story.append(PageBreak())


def add_priorities(story, data, styles):
    story.extend(section_title("02 · HẠNG MỤC ƯU TIÊN", "Nguồn lực Nhà trường đang tìm kiếm", styles, "Hai nhóm tiếp nhận chính: học bổng hiện kim và tài trợ hiện kim/hiện vật cho sự kiện."))
    rows = []
    for item in data["priorityItems"]:
        rows.append([
            Paragraph(ptext(item["id"]), styles["table_bold"]),
            Paragraph(ptext(item["title"]), styles["table_bold"]),
            Paragraph(ptext(item["description"]), styles["table"]),
        ])
    table = LongTable(rows, colWidths=[12 * mm, 42 * mm, doc_width() - 54 * mm], style=table_style())
    story.append(table)
    story.append(Spacer(1, 7 * mm))
    story.append(Paragraph("Hành trình hiện diện thương hiệu", styles["h2"]))
    for item in data["journeyItems"]:
        story.append(Paragraph(f"<b>{ptext(item['id'])} · {ptext(item['title'])}</b> — {ptext(item['subtitle'])}", styles["body"]))
    story.append(PageBreak())


def add_packages(story, data, styles):
    story.extend(section_title("03 · GÓI HỢP TÁC", "05 cấp độ đồng hành", styles, "Mỗi gói được trình bày theo định vị, quyền lợi, đo lường và điều kiện triển khai hiện có trong landing page."))
    for index, pkg in enumerate(data["packages"]):
        if index:
            story.append(PageBreak())
        story.append(Paragraph(f"{ptext(pkg['id'])} · {ptext(pkg['name'])}", styles["h1"]))
        meta = Table([
            [Paragraph("GIÁ TRỊ", styles["label"]), Paragraph("SỐ LƯỢNG", styles["label"]), Paragraph("VAI TRÒ", styles["label"])],
            [Paragraph(ptext(pkg["price"]), styles["table_bold"]), Paragraph(ptext(pkg["slots"]), styles["table_bold"]), Paragraph(ptext(pkg["role"]), styles["table"])],
        ], colWidths=[38 * mm, 30 * mm, doc_width() - 68 * mm])
        meta.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), PAPER), ("BOX", (0, 0), (-1, -1), 0.5, LINE), ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("PADDING", (0, 0), (-1, -1), 7)]))
        story.append(meta)
        story.append(Spacer(1, 5 * mm))
        story.append(Paragraph("Điểm nổi bật", styles["h2"]))
        story.extend(bullet_list(pkg["highlight"], styles))
        story.append(Spacer(1, 3 * mm))
        story.append(Paragraph("Định vị và quyền sở hữu", styles["h2"]))
        ownership_rows = [
            ["Concept cốt lõi", pkg["overview"]["concept"]],
            ["Quyền sở hữu khác biệt", pkg["ownership"]["distinctRight"]],
            ["Signature Asset", pkg["ownership"]["signatureAsset"]],
            ["Độc quyền ngành hàng", pkg["ownership"]["industryExclusivity"]],
            ["Quyền ưu tiên", pkg["ownership"]["priorityRight"]],
        ]
        story.append(two_col_table(ownership_rows, styles))
        story.append(Spacer(1, 5 * mm))
        detail_data = [
            [Paragraph("QUYỀN LỢI NỀN TẢNG", styles["label"]), Paragraph("QUYỀN LỢI ĐẶC THÙ", styles["label"])],
            [bullet_cell(pkg["benefits"]["coreRights"], styles), bullet_cell(pkg["benefits"]["specificRights"], styles)],
            [Paragraph("ĐO LƯỜNG & NGHIỆM THU", styles["label"]), Paragraph("TRIỂN KHAI & GIỚI HẠN", styles["label"])],
            [bullet_cell(pkg["measurement"]["kpi"] + pkg["measurement"]["deliverables"] + pkg["measurement"]["proofs"], styles), bullet_cell(pkg["implementation"]["coordinationConditions"] + pkg["implementation"]["limitations"], styles)],
        ]
        detail = Table(detail_data, colWidths=[doc_width() / 2] * 2)
        detail.setStyle(TableStyle([("BOX", (0, 0), (-1, -1), 0.5, LINE), ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("BACKGROUND", (0, 0), (-1, 0), RED_SOFT), ("BACKGROUND", (0, 2), (-1, 2), PAPER), ("PADDING", (0, 0), (-1, -1), 7)]))
        story.append(detail)
    story.append(PageBreak())


def add_assets(story, data, styles):
    story.extend(section_title("04 · SIGNATURE ASSETS", "12 tài sản đồng hành biểu tượng", styles))
    rows = [[Paragraph("MÃ", styles["table_bold"]), Paragraph("TÀI SẢN", styles["table_bold"]), Paragraph("Ý TƯỞNG & PHẠM VI", styles["table_bold"]), Paragraph("GIÁ / SUẤT", styles["table_bold"])]]
    for asset in data["assets"]:
        rows.append([
            Paragraph(f"{ptext(asset['id'])}<br/>Cấp {ptext(asset['tier'])}", styles["table_bold"]),
            Paragraph(ptext(asset["name"]), styles["table_bold"]),
            Paragraph(f"{ptext(asset['shortIdea'])}<br/><font color='#5A6881'>{ptext(asset['ownership'])}</font>", styles["table"]),
            Paragraph(f"{ptext(asset['priceRange'])}<br/>{ptext(asset['slots'])}", styles["table"]),
        ])
    story.append(LongTable(rows, colWidths=[18 * mm, 39 * mm, 85 * mm, doc_width() - 142 * mm], repeatRows=1, style=table_style(header=True)))
    story.append(PageBreak())


def add_benefits(story, data, styles):
    story.extend(section_title("05 · THƯ VIỆN QUYỀN LỢI", "25 quyền lợi nền tảng R01–R25", styles))
    rows = [[Paragraph("MÃ", styles["table_bold"]), Paragraph("QUYỀN LỢI", styles["table_bold"]), Paragraph("MÔ TẢ & NGHIỆM THU", styles["table_bold"]), Paragraph("GÓI", styles["table_bold"])]]
    for item in data["benefits"]:
        rows.append([
            Paragraph(ptext(item["id"]), styles["table_bold"]),
            Paragraph(f"<b>{ptext(item['name'])}</b><br/><font color='#5A6881'>{ptext(item['group'])}</font>", styles["table"]),
            Paragraph(f"{ptext(item['description'])}<br/><b>Nghiệm thu:</b> {ptext(item['proofOfDelivery'])}<br/><b>Điều kiện:</b> {ptext(item['appliedConditions'])}", styles["table"]),
            Paragraph(ptext(" · ".join(item["fitPackages"])), styles["table_bold"]),
        ])
    story.append(LongTable(rows, colWidths=[13 * mm, 44 * mm, 95 * mm, doc_width() - 152 * mm], repeatRows=1, style=table_style(header=True)))
    story.append(PageBreak())


def add_matrix(story, data, styles):
    story.extend(section_title("06 · MA TRẬN GÓI", "Đối chiếu nhanh quyền lợi P1–P5", styles))
    rows = [[Paragraph(x, styles["table_bold"]) for x in ["TIÊU CHÍ", "P1", "P2", "P3", "P4", "P5"]]]
    for item in data["matrix"]:
        rows.append([Paragraph(f"<b>{ptext(item['id'])}</b><br/>{ptext(item['name'])}", styles["table"])] + [Paragraph(ptext(item[key]), styles["table"]) for key in ("p1", "p2", "p3", "p4", "p5")])
    widths = [48 * mm] + [(doc_width() - 48 * mm) / 5] * 5
    story.append(LongTable(rows, colWidths=widths, repeatRows=1, style=table_style(header=True)))
    story.append(PageBreak())


def add_terms(story, data, styles):
    story.extend(section_title("07 · NGUYÊN TẮC HỢP TÁC", "Điều khoản và phạm vi áp dụng", styles))
    for term in data["terms"]:
        block = [
            Paragraph(f"{ptext(term['id'])} · {ptext(term['topic'])}", styles["h3"]),
            Paragraph(ptext(term["proposedWording"]), styles["body"]),
            Paragraph(f"<b>Mục đích kiểm soát:</b> {ptext(term['controlPurpose'])}<br/><b>Phạm vi:</b> {ptext(term['scope'])}<br/><b>Phê duyệt:</b> {ptext(term['approver'])} · <b>Trạng thái:</b> {ptext(term['status'])}", styles["small"]),
            Spacer(1, 3 * mm),
        ]
        story.append(KeepTogether(block))
    story.append(PageBreak())


def add_contact(story, data, styles):
    invitation = data["invitation"]["letter"]
    story.extend(section_title("08 · LỜI NGỎ & LIÊN HỆ", "Cùng Văn Lang kiến tạo khởi đầu đáng nhớ", styles))
    story.append(Paragraph(ptext(invitation["greeting"]), styles["h2"]))
    for paragraph in invitation["paragraphs"]:
        story.append(Paragraph(ptext(paragraph), styles["body"]))
    story.append(Spacer(1, 5 * mm))
    contact = Table([
        [Paragraph("ĐẦU MỐI HỢP TÁC", styles["label"]), Paragraph("THÔNG TIN LIÊN HỆ", styles["label"])],
        [Paragraph("Nguyễn Thu Hiền<br/>Trung tâm Hỗ trợ Sinh viên<br/>Trường Đại học Văn Lang", styles["h3"]), Paragraph(f"Email: {ptext(data['event']['email'])}<br/>Điện thoại: {ptext(data['event']['phone'])}<br/>Website: {ptext(data['event']['website'])}", styles["body"])],
    ], colWidths=[doc_width() / 2] * 2)
    contact.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), PAPER), ("BOX", (0, 0), (-1, -1), 0.5, LINE), ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("PADDING", (0, 0), (-1, -1), 10)]))
    story.append(contact)
    story.append(Spacer(1, 8 * mm))
    story.append(Paragraph("LƯU Ý", styles["label"]))
    story.append(Paragraph("Tài liệu này phục vụ trao đổi và xây dựng phương án. Mọi quyền lợi chỉ có hiệu lực sau khi được cấp có thẩm quyền của Nhà trường phê duyệt và thể hiện trong văn bản chính thức.", styles["body"]))


def doc_width():
    return PAGE_W - 34 * mm


def table_style(header=False):
    commands = [
        ("BOX", (0, 0), (-1, -1), 0.5, LINE), ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6), ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]
    if header:
        commands.extend([("BACKGROUND", (0, 0), (-1, 0), RED_SOFT), ("LINEBELOW", (0, 0), (-1, 0), 1, RED)])
    return TableStyle(commands)


def two_col_table(rows, styles):
    data = [[Paragraph(ptext(label), styles["table_bold"]), Paragraph(ptext(value), styles["table"])] for label, value in rows]
    return Table(data, colWidths=[45 * mm, doc_width() - 45 * mm], style=table_style())


def bullet_cell(items, styles):
    return [Paragraph(f"• {ptext(item)}", styles["table"]) for item in items]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--data", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--project-root", required=True)
    args = parser.parse_args()

    register_fonts()
    with open(args.data, "r", encoding="utf-8") as stream:
        data = json.load(stream)

    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    doc = ProposalDoc(str(output), data, args.project_root, title="Hồ sơ Đồng hành Hội Khai giảng Văn Lang 2026", author="Trường Đại học Văn Lang")

    story = [PageBreak()]
    add_overview(story, data, styles)
    add_priorities(story, data, styles)
    add_packages(story, data, styles)
    add_assets(story, data, styles)
    add_benefits(story, data, styles)
    add_matrix(story, data, styles)
    add_terms(story, data, styles)
    add_contact(story, data, styles)
    doc.build(story)
    print(output.resolve())


if __name__ == "__main__":
    main()
