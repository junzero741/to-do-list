


## 팀원 소개

hiro : 안녕하세요 히로 입니다

Q : 히로는 프로젝트 끝날 때까지 빈페이지만 볼 수도...

Goody : Q의 조수 구디입니다~

## 팀의 규칙

- 스크럼 방식
  아침 10시 ~ 10시 30분 - 자신이 무엇을 했는지, 오늘 계획이 어떻게 되는지 이야기

- 회의 시간
  오후 9시 (최대 1시간)
  API 맞추기 (데이터 형식, 어떻게 주고 받나?)
  그 날 생긴 오류
  나아갈 방향

- 코딩 스타일
  (FE) FE 두명끼리 맞춘다.
  (BE) Hiro 맘대로

boardId

title

content

## 할 일 정리

FE:

- 전체적인 UI틀 마무리
- Form data로 post 보내기
- 카드 생성 및 수정 구현
- css in js(styled-components) 적용
- 최대한 잘게 나누기
-

BE:

- column별 task출력 api만들기
- update 요청시 task 수정기능 구현
- delete 요청시 column, task 삭제기능 구현

<img width="754" alt="스크린샷 2021-04-09 오후 5 10 46" src="https://user-images.githubusercontent.com/71166372/114152059-c4a12900-9958-11eb-8fad-a9a8f8e6b8a2.png">

### JSON 데이터 형식 (04.08 수정)

```
[
  {
    "userID": "Q", (x)
    "columns": [		==> "board"
      {
        "id": 1,
        "title": "해야할 일",
        "cards": [
          {
            "id": 1,
            "title": "리액트 연습",
            "content": "리액트를 연습해보자",
            "author": "hiroGoodyQ", (x)
            "time": "2021-02-01" ( 분초까지)
          }
        ]
      },
      {
        "id": 2,
        "title": "하고 있는 일",
        "cards": [
          {
            "id": 1,
            "title": "이거는 진행중",
            "content": "리액트를 연습해보는중이다",
            "author": "hiroGoodyQ",
            "time": "2021-02-01"
          }
        ]
      },
      {
        "id": 3,
        "title": "완료한 일",
        "cards": [
          {
            "id": 1,
            "title": "이거는 끝났다.",
            "content": "리액트를 연습했다",
            "author": "hiroGoodyQ",
            "time": "2021-02-01"
          }
        ]
      }
    ]
  }
]
```

### 하드코딩 user (POST)

```
{
  id: hiroGoodyQ
  password:1234
}
```

## API url 형식

### Board

POST) /boards/  
<br>
GET) /boards/{boardId}
<br>
DELETE) /boards/{boardId}
<br>
PUT) /boards/{boardId}
<br>

### Card

POST) /{boardId}/cards
<br>
GET) /{boardId}/cards
<br>
DELETE) /{boardId}/cards
<br>

- board

  - card

- log

- user

### POST

form 형식으로 보내줄 것
