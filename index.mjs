import core from "@actions/core";
import semanticRelease from "semantic-release";

async function run() {
  try {
    const githubToken = core.getInput("GITHUB_TOKEN");
    const npmToken = core.getInput("NPM_TOKEN");
    const extendConfig = `@rdeak/semantic-release-config${npmToken ? "" : "/release-only"}`;

    process.env.GITHUB_TOKEN = githubToken;
    process.env.NPM_TOKEN = npmToken;

    const result = await semanticRelease({
      extends: extendConfig,
    });

    if (!result) {
      core.setFailed("No release published");
      return;
    }

    const { version, gitTag } = result.nextRelease;
    const [majorVersion] = version.split('.');

    core.exportVariable("RELEASE_VERSION", version);
    core.exportVariable("RELEASE_MAJOR_VERSION", majorVersion);
    core.exportVariable("RELEASE_TAG", gitTag);

    core.setOutput("release-version", version);
    core.setOutput("release-major-version", majorVersion);
    core.setOutput("release-tag", gitTag);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
