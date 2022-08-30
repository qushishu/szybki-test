#FROM openjdk:15
#EXPOSE 8080
#ADD out/artifacts/demo_jar/demo.jar demo.jar
#ENTRYPOINT ["java", "-jar", "/demo.jar"]
FROM openjdk:15
EXPOSE 8080
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]