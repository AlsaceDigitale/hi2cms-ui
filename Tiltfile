docker_build(
    'hi2cms-ui-dev',
    context='.',
    dockerfile='./Dockerfile',
    live_update=[
        sync('./src', '/src/src'),
        sync('./package.json', '/src/package.json'),
        run(
            'cd src && yarn install',
            trigger=['./package.json']
        )
    ]
)

docker_compose('./docker-compose.yml')