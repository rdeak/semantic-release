import core from "@actions/core";
import semanticRelease from "semantic-release";

async function run() {
  try {
    const npmToken = process.env.NPM_TOKEN;
    const extendConfig = `@rdeak/semantic-release-config${npmToken ? "" : "/release-only"}`;

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

    core.setOutput("release_version", version);
    core.setOutput("release_major_version", majorVersion);
    core.setOutput("release_tag", gitTag);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
