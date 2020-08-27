pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    docker.build('korti11/website:dev')
                }
            }
        }

        stage('Tag Docker image') {
            when {
                branch 'production'
            }
            steps {
                script {
                    def packageJson = readJSON file: 'package.json'
                    sh "docker tag korti11/website:dev korti11/website:${packageJson.version}"
                    sh "docker tag korti11/website:dev korti11/website:latest"
                }
            }
        }
    }
}