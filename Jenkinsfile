pipeline {
  agent { label 'linux' }
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('odunade-dockerhub')
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t odunade/my-images:2.2 .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push odunade/my-images:2.2'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}