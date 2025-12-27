
> - 가장 기본적이고 많이 사용되는 패턴이다.
> - 복잡한 객체를 단계적으로 생성하는 방법으로, 생성 과정과 표현을 분리한다.

### 등장 배경
- **객체 생성시 생성자 폭발(Telescoping Constructor)** 
    - 매개 변수 증가시 인자 순서 실수 및 가독성이 나빠지는 현상
- **Setter 문제**
    - 불변 객체 생성이 불가하며, 생성 순서의 제어가 어려움


### 장점
1. 객체의 구성요소를 한눈에 볼 수 있어 <u>코드 읽기와 유지보수가 편리</u>하다.
2. <u>객체를 깔끔하게 생성</u> 할 수 있다.
3. 내가 사용하고자하는 <u>매개변수를 선택적으로 조합해서 객체를 생성</u> 할 수 있다.
4. <u>생성 순서를 강제 가능</u>하다.


```java
public class MyText {

    private String text;

    @Override
    public String toString() {
        return "Text{" +
                "text='"+ "text ='" +text +'\''+
                '}';
    }

    // static을 사용해서 Text 클래스와 Builder 클래스를 분리
    // 파일로 분리해도 되지만 Text 객체랑 살짝 관계를 지음
    public static class Builder{
        private String title;
        private String content;
        private String[] items;

        public Builder setTitle(String title){
            this.title = title;
            return this;
        }

        public Builder setContent(String content){
            this.content = content;
            return this;
        }
        // 가변인자 (...) 사용 -> 여러개의 값을 받을 수 있음
        public Builder setItems(String... items){
            this.items = items;
            return this;
        }

        // Text 타입을 반환하는 빌드객체
        public MyText build() {
            MyText text = new MyText();
            StringBuilder sb = new StringBuilder();
            sb.append("title : ").append(title).append("\n");
            sb.append("content : ").append(content).append("\n");
            sb.append("items: ").append("\n");
            for (String item : items) {
                sb.append(" - ").append(item).append("\n");
            }
            text.text = sb.toString();
            return text;
        }
    }
}

```

### 실행 결과

```java
public class Main {

    // 텍스트 객체 생성시 데이터를 세팅하고 build로 완성
    public static void main(String[] args) {
        MyText text = new MyText.Builder()
                .setTitle("builder Pattern")
                .setContent("study builder pattern")
                .setItems("item1", "item2", "item3")
                .build();

        System.out.println(text);
    }
}
```

```java
Text{text='text ='title : builder Pattern
content : study builder pattern
items: 
 - item1
 - item2
 - item3
'}

```