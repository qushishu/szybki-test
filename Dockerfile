FROM openjdk:8
EXPOSE 8090
ADD out/artifacts/demo_jar/demo.jar demo.jar
ENTRYPOINT ["java", "-jar", "/demo.jar"]