# 2024학년도 1학기 KWEB 준회원 스터디 과제 Repository

2024학년도 1학기 KWEB 준회원 스터디의 과제는 Github을 사용해 제출하게 됩니다. 이 Repository는 과제 수행에 필요한 템플릿 코드를 포함하고 있습니다.

## 과제 작성 방법

1. **Repository Fork**: 먼저, 이 Repository를 본인의 GitHub 계정으로 Fork해야 합니다. 본인의 Repository가 과제를 작성하는 개인 작업 공간이 됩니다.

2. **과제 수행**: 스터디 시간별로 안내하는 과제를 로컬에서 수행하고, commit과 push 명령어를 실행해 본인의 Repository에 작업한 내용을 기록해 주세요.

3. **과제 제출**: 과제를 완료하면, 본인의 Repository에서 원본 Repository에 대해 Pull Request를 생성해 과제를 제출할 수 있습니다.

## 과제 지침

- **마감 기한**: 모든 과제는 공통적으로 **스터디 다음 주 목요일까지** 제출되어야 합니다.

- **과제 평가**: 과제를 제출하면, 스터디장이 여러분의 과제를 리뷰합니다. 스터디장이 Pull Request를 Approve하면 해당 과제가 통과된 것이며, 만약 기준이 충족되지 않았다면 추가 수정을 요청할 수도 있습니다.

- 과제는 본인이 직접 완료해야 합니다. 다른 사람의 코드를 복사 하여 제출하는 것은 금지입니다.

- 과제를 수행하는 데 어려움을 겪거나 질문이 있는 경우, 스터디장에게 언제든지 문의해 주세요.

## 상세 설명
<details>
<summary>보기</summary>
  
### [KWEB 준회원 스터디 Repository](https://github.com/KWEBofficial/241R-frontend)에서 내 저장소로 Fork 하기
![2024-1R-Frontend-01](https://github.com/LineNo2/241R-frontend/assets/57629885/1eb68dce-e0cc-4c6b-aace-9aae845b3a9c)

### 내 저장소에서 내 컴퓨터로 Clone 하기
```bash
git clone ${내 저장소 URL}
```

![2024-1R-Frontend-02](https://github.com/LineNo2/241R-frontend/assets/57629885/1e76e4d1-4eef-4349-bd06-ec880e0f7e40)

### 내 컴퓨터에 저장된 내 저장소 파일들 확인하기

```bash
cd 241R-frontend
```
※ cd : Change Directory

![2024-1R-Frontend-03](https://github.com/LineNo2/241R-frontend/assets/57629885/f2ab44f9-a696-46d9-b542-87db0c8df7e8)

### 내 컴퓨터에서 변경된 파일 Commit 하기
```bash
git add .
git commit -m "${커밋 메시지}"
```
※ `git status` : 현재 로컬 저장소 상태 확인
※ 이때 *"Please tell me who are you"* 문구가 나온다면, [여기](#내가-누구냐고-물어볼-때)를 참고하자.

![2024-1R-Frontend-04](https://github.com/LineNo2/241R-frontend/assets/57629885/27137f4f-3dd5-4284-905e-ef3b34c76117)

### 내 컴퓨터에서 내 저장소로 Push 하기
```bash
git push origin main
```
- origin : `remote` 이름
- main : `branch` 이름
 
![2024-1R-Frontend-05](https://github.com/LineNo2/241R-frontend/assets/57629885/d3f43713-2748-477a-830a-f7675791015e)

### 내 저장소에서 KWEB 준회원 스터디 Repository로 Pull Request 날리기
- *학번 이름 주차* 형식 준수.

![2024-1R-Frontend-06](https://github.com/LineNo2/241R-frontend/assets/57629885/1f905371-9dae-4d5e-8234-582e795b33f3)

# 내가 누구냐고 물어볼 때

<h2 id="github-token-generation"> Github Token 만들기 </h2>

![2024-1R-Frontend-07](https://github.com/LineNo2/241R-frontend/assets/57629885/505129e8-5b88-449e-bdb6-01280325c764)

![2024-1R-Frontend-08](https://github.com/LineNo2/241R-frontend/assets/57629885/b7c5a0c1-3eb3-4fc8-9cf4-bf85edb62f3f)

- 기간은 `Forever`로 설정하면 계속 사용 가능.
- 이 토큰은 한번 발급받으면 절대 재확인이 불가능. 주의해서 저장해야함.

## `git commit`시 내가 누구냐고 물어 볼 때

- `git add .`후 `git commit`시 유저의 정보를 요구함.
- 이는 `commit`시 유저의 정보가 필요해서임.
- Github 가입했을 때 사용했던 이메일과, Github에서 사용중인 닉네임을 입력하면 됨.

![2024-1R-Frontend-09](https://github.com/LineNo2/241R-frontend/assets/57629885/b4605785-863d-4412-877e-4ba68f8c3d55)

![2024-1R-Frontend-10](https://github.com/LineNo2/241R-frontend/assets/57629885/7d93bd25-6f23-48ca-8e83-6d85f780ac80)

## `git push`시 비밀번호 요구할 때 

- 최초 push시 Username과 Password를 요구함.
- Username 은 Github에서 사용중인 닉네임.
- Password에는 상기 [Github Token 만들기](#github-token-generation)에서 발급받은 Token을 사용한다.

![2024-1R-Frontend-11](https://github.com/LineNo2/241R-frontend/assets/57629885/da0b1e2d-76e3-4d4b-b430-91be7eb4e9c6)

- 성공적으로 Push가 완료되었다.

</details>




---

여러분의 참여를 환영합니다! 🎉
