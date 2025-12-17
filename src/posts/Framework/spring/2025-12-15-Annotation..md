Compile -> runtime (Linking -> run)

aaa.javav -> compile -> aaa.class
JVM(프로세스)가 JAVA 바이트코드를 받아서 Native 기계어로 변환하고 실행

오류는 Compile타임에 발생하는것이 좋다

## 어노테이션(Annotation)

코드에 메타데이터(metadata)를 추가하기 위한 문법 요소이다.

- 코드 수준에서 활용가능한 주석형 자료
- 컴파일 시(실행 과정)에 어떻게 코드를 처리 할 것인지 명시한 정보
  - 문법적오류를 사전에 강력하게 검사할 수 있는 정보 제공
  - IDE 같은 소스코드 작성 도구가 코드를 생성할 수 있는 근거
  - 런타임에 특정 기능을 실행하거나 역할 정의 가능
- 런타임에 활용할 수 있는 정보를 담을 수 있다.
- 이미 활용되고 있는것 외에 타입 정의르 통해 추가 어노테이션 개발 가능

### 사용 이유

1. 컴파일 타임 검증

문법 오류, 규약 위반을 컴파일 단계에서 차단

```java
@Override
void test() { } // 부모에 없으면 컴파일 에러
```

2. 코드 가독성 및 명시성 향상

- 주석보다 명확하고 구조적인 의미 전달
- 규칙과 의도를 코드에 직접 표현

```java
@Deprecated
public void oldMethod() {}
```

3. 반복 코드 제거 (설정의 선언적 처리)

- XML, 설정 파일, 보일러플레이트 코드 제거
- Spring, JPA 등에서 핵심 역할

```java
@RestController
@RequestMapping("/users")
```

4. 프레임워크와의 연동

- Spring, JPA, Lombok 등은 어노테이션 기반으로 동작
- 리플렉션을 통해 런타임에 해석

```java
@Entity
@Table(name = "users")
```

## 종류

### 1. 기본 어노테이션(Built-in Annotations)

**1. @Override**

- 메서드 **재정의**를 명시
- 오타나 시그니처 오류 방지

```java
@Override
public String toString() { ... }
```

2. @Deprecated

- 더 이상 사용 권장되지 않는 요소 표시

```java
@Deprecated
public void oldApi() {}
```

✔ 컴파일 시 경고 발생

3. @SuppressWarnings

- 컴파일 경고 무시

```java
@SuppressWarnings("unchecked")
List list = new ArrayList();
```

자주 사용되는 값:

- unchecked
- deprecation
- rawtypes

4. @FunctionalInterface

- 함수형 인터페이스임을 명시
- 추상 메서드가 1개인지 컴파일 타임에 검증

```java
@FunctionalInterface
interface MyFunc {
void run();
}
```

5. @SafeVarargs

- 제네릭 가변 인자 사용 시 경고 제거
- final, static, private 메서드에만 적용

### 2. 메타 어노테이션(Meta-Annotations)

- 어노테이션을 정의할 때 사용하는 어노테이션 (어노테이션의 어노테이션)

1. @Target

- 적용 가능한 위치 지정

```java
@Target(ElementType.METHOD)
```

주요 ElementType:

- TYPE : 클래스, 인터페이스
- METHOD
- FIELD
- PARAMETER
- CONSTRUCTOR

2. @Retention

- 어노테이션이 언제까지 유지될지 결정

```java
@Retention(RetentionPolicy.RUNTIME)
```

값 의미

- SOURCE 컴파일 후 제거
- CLASS 클래스 파일까지 유지 (기본값)
- RUNTIME 런타임까지 유지 (리플렉션 가능)

✔ Spring, JPA 어노테이션은 대부분 RUNTIME

3. @Documented

- Javadoc에 포함 여부

```java
@Documented
```

4. @Inherited

- 부모 클래스의 어노테이션을 자식 클래스가 상속받을지 여부

```java
@Inherited
```

✔ 클래스 레벨에서만 적용 가능

5. @Repeatable

- 같은 어노테이션을 여러 번 적용 가능

```java
@Repeatable(Roles.class)
@interface Role {
String value();
}

@Role("ADMIN")
@Role("USER")
class Member {}
```
