const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const sonarqubeScanner = require("sonarqube-scanner");

const projectRoot = path.resolve(__dirname, "..");
const propertiesPath = path.join(projectRoot, "sonar-project.properties");

const envFiles = [".env.local", ".env"];
for (const file of envFiles) {
  const envPath = path.join(projectRoot, file);
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath, override: false });
  }
}

const token = process.env.SONAR_TOKEN;

if (!token) {
  console.error("Missing SONAR_TOKEN environment variable.");
  console.error("Set SONAR_TOKEN in your terminal before running the scan.");
  process.exit(1);
}

if (!fs.existsSync(propertiesPath)) {
  console.error("sonar-project.properties was not found in project root.");
  process.exit(1);
}

const rawProperties = fs.readFileSync(propertiesPath, "utf8");
const options = {};

for (const line of rawProperties.split(/\r?\n/)) {
  const trimmed = line.trim();

  if (!trimmed || trimmed.startsWith("#")) {
    continue;
  }

  const delimiterIndex = trimmed.indexOf("=");
  if (delimiterIndex === -1) {
    continue;
  }

  const key = trimmed.slice(0, delimiterIndex).trim();
  const value = trimmed.slice(delimiterIndex + 1).trim();

  if (!key) {
    continue;
  }

  if (key === "sonar.login" || key === "sonar.token") {
    continue;
  }

  options[key] = value;
}

const serverUrl = options["sonar.host.url"] || "https://sonarcloud.io";

sonarqubeScanner(
  {
    serverUrl,
    token,
    options,
  },
  () => {
    console.log("Sonar scan finished.");
    process.exit(0);
  },
);
