/**
 * Chuyển các file dữ liệu TypeScript của landing page thành JSON cho trình tạo PDF.
 * Cách này giúp popup, website và PDF cùng dùng một nguồn nội dung duy nhất.
 */

import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const projectRoot = path.resolve(import.meta.dirname, "..");
const outputPath = process.argv[2];

if (!outputPath) {
  throw new Error("Thiếu đường dẫn file JSON đầu ra.");
}

function loadTypeScriptData(relativePath) {
  const sourcePath = path.join(projectRoot, relativePath);
  const source = fs.readFileSync(sourcePath, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;

  const module = { exports: {} };
  const runModule = new Function("exports", "module", "require", compiled);
  runModule(module.exports, module, () => {
    throw new Error(`File dữ liệu ${relativePath} không được phép import module ngoài.`);
  });
  return module.exports;
}

const general = loadTypeScriptData("app/data.ts");
const partnership = loadTypeScriptData("app/data/partnership.ts");
const priority = loadTypeScriptData("app/data/priorityNeeds.ts");

const exported = {
  generatedFrom: ["app/data.ts", "app/data/partnership.ts", "app/data/priorityNeeds.ts"],
  siteMode: general.SITE_MODE,
  event: general.event,
  stats: general.stats,
  audiences: general.audiences,
  journeyItems: general.journeyItems,
  sponsorGoals: general.sponsorGoals,
  priorityItems: priority.priorityItems,
  partnershipStats: partnership.partnershipStats,
  packages: partnership.packagesData,
  assets: partnership.signatureAssetsData,
  benefits: partnership.benefitsData,
  matrix: partnership.packageMatrixData,
  terms: partnership.partnershipTermsData,
  invitation: partnership.partnerInvitationContent,
};

fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true });
fs.writeFileSync(path.resolve(outputPath), JSON.stringify(exported, null, 2), "utf8");
