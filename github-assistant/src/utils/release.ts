import { Release } from "./data.types";

async function createRelease(repo, argv, notes: string): Promise<void> {
    console.info(notes);

    const response = await repo.createRelease({
        'tag_name': `v${argv.tag}`,
        'target_commitish': argv.branch,
        'name': `Release v${argv.tag}`,
        'body': notes,
        'draft': false,
        'prerelease': argv.prerelease
    })

    console.info('\nCreated release:', response.data.id, response.data.name, '\n\n');
}

function onReleaseExist(): void {
    console.error('release exist')
}

export async function release(repo, argv, notes: string): Promise<void> {
    const response: { data: Release[] } = await repo.listReleases();

    const releaseExists = response.data
        .some(release => release.tag_name.includes(argv.tag))

    // if release exist and code tries to create same release 
    // then github api throws error code 422: unprocessable entity
    releaseExists ? onReleaseExist() : createRelease(repo, argv, notes);
}
