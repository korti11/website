pipeline {
    agent {
        docker { image 'node:lts' }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Vue project') {
            steps {
                sh 'npm ci --production'
                sh 'npm run build'
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    def app = docker.build('korti11/website:dev')
                    if(env.BRANCH_NAME == "production") {
                        def packageJson = readJSON file: 'package.json'
                        app.push("${packageJson.version}")
                        app.push("latest")
                    }
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'dist', fingerprint: true
        }
    }
}