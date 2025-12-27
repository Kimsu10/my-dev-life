> - 객체 생성 로직을 서브클래스에 위임하여,
> - 어떤 객체를 만들지는 하위 클래스가 결정하는 패턴이다.

## 사용 이유
- 객체가 여러 구현체로 바뀌 가능성이 있는 경우
- 결합도를 낮추고, 객체생성 규칙을 한곳에 모아야하는 경우
- 타입별로 다른 객체를 생성하는 경우
- OCP(개방/폐쇄 원칙)를 지키고 싶은 경우
- 객체 생성 책임을 분리하기 위해 사용

## 구조

```bash
AbstractFactory
   ↑
ConcreteFactoryA → ProductA1, ProductA2
ConcreteFactoryB → ProductB1, ProductB2
```

## 장점

| 장점  | 이유                        |
|-----| ------------------------- |
| 확장성 | 카드 종류 추가 시 Factory만 추가    |
| 결합도 | Client는 Product 인터페이스만 의존 |
| OCP | 기존 코드 수정 없이 기능 확장         |
| 테스트 | Mock Factory로 테스트 가능      |


## 단점 
- 클래스 수가 증가하여 구조가 복잡해진다.(인터페이스)
- 신규 인원이 구조를 이해하는데 시간이 많이 듬. (내 경우..)
- 객체가 어디서 생성되는지 바로 보이지않아 코드 흐름 추적이 어렵다.
- 상속에 의존하여 상속이 깊어질수록 유연성이 감소한다.


## 코드
- 회사와 회사원이 존재
- 사원은 출입증을 회사라는 Factory에서 발급받아 사용 가능

1. 출입증
    - 어떤 출입증인지는 공장(factory)만 앎
    - 사원은 사용만 가능
```java
package com.kimsu.designPattern;
// 출입증
public interface Pass {
    void use();
}
```
2. 발급될 출입증
    - 생성자는 패키지 내부에서만 호출
    - 클라이언트는 이 클래스를 직접 new 로 사용하지 않음
```java
package com.kimsu.designPattern;

// 실제 출입증(ID 카드)
public class IdCard implements Product {

    private final String owner;

    public IdCard(String owner) {
        this.owner = owner;
        System.out.println(owner + "님의 ID 카드가 발급되었습니다.");
    }

    @Override
    public void use() {
        System.out.println(owner + "님이 출입증을 사용합니다.");
    }
}
```
3. Factory(공장)
    - 절차만 정의함 (구체적 타입 X)
    - `create()`: 객체 생성 흐름을 고정
    - `createProduct()`: 어떤 객체를 만들지는 서브 클래스에 위임
   
```java
package com.kimsu.designPattern;

// 출입증 공장의 추상 개념
 
public abstract class Factory {

    public final Pass create(String owner) {
        Pass pass = createPass(owner);
        registerPass(pass);
        return pass;
    }

    protected abstract Pass createPass(String owner);
    protected abstract void registerPass(Pass Pass);
}
```
4. IdCardFactory (실제 공장)
    - 구체적인 공장, 실제 객체 생성 권한을 가지는 클래스
```java
package com.kimsu.designPattern;

import java.util.ArrayList;
import java.util.List;

// ID 카드 전용 공장
public class IdCardFactory extends Factory {

    private final List<String> owners = new ArrayList<>();

    @Override
    protected Pass createPass(String owner) {
        return new IdCard(owner);
    }

    @Override
    protected void registerPass(Pass pass) {
        IdCard card = (IdCard) pass;
        owners.add(card.toString());
    }
}
```
---

## 실행 및 결과
- new IdCard()를 사용하지않음
- Factory와 Pass에만 의존하여 결합도를 최소화

```java
package com.kimsu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kimsu.designPattern.Factory;
import com.kimsu.designPattern.IdCardFactory;
import com.kimsu.designPattern.Pass;

@SpringBootApplication
public class FederationApplication {

    public static void main(String[] args) {
        SpringApplication.run(FederationApplication.class, args);

        Factory factory = new IdCardFactory();

        Pass card1 = factory.create("Kimsu");
        Pass card2 = factory.create("Developer");
        Pass card3 = factory.create("DevOps");

        card1.use();
        card2.use();
        card3.use();
    }
}
```


```bash
```