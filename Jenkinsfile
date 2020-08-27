pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Vue project') {
            agent {
                docker { image 'node:lts' }
                args '-v ./dist:./dist'
            }
            steps {
                sh 'npm ci'
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
            archiveArtifacts artifacts: 'dist/*', fingerprint: true
        }
    }
}