node {
    def dockerImage
    stage('Clone repository') {
        checkout scm
    }
    stage('Build image') {
        dockerImage = docker.build("alexanderwyss/web-starter")
    }
    stage('Deploy') {
        sh 'docker stop web-starter || true && docker rm -f web-starter || true'
        sh 'docker run -d --expose 8080 --restart unless-stopped --name web-starter -e PORT=8080 -e VIRTUAL_HOST=web-starter.wyss.tech -e VIRTUAL_PORT=8080 -e LETSENCRYPT_HOST=web-starter.wyss.tech alexanderwyss/web-starter:latest'
    }
}
