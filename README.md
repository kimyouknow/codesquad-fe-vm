# 코드스쿼드 개인 미션 자판기 만들기

코드스쿼드에서 진행 개인프로젝트로 자판기를 만드는 미션입니다.
공통 미션 요구사항이 주어졌으며 개인이 적당한 수준으로 미션 요구사항을 수정할 수 있었습니다.
제가 파악한 미션 요구 사항은 wiki에 정리해뒀습니다.

1차는 2022.05.09 ~ 2022.05.20까지 약 2주간 진행했습니다.
2차는 코드스쿼드가 끝난 후 마무리하지 못한 부분(style, server, 그 외 에러 및 리팩토링)은 7월 이후에 진행할 예정입니다.

자세한 내용은 [wiki](https://github.com/kimyouknow/codesquad-fe-vm/wiki)에 적어뒀습니다.

# 자판기 동작 설명

실제 오프라인 자판기가 동작하는 것처럼 관리자와 일반 사용자를 두었습니다.

- 일반 사용자: 상품 주문 및 잔돈 투입
- 관리자: 재고관리 및 자판기 내부 거스름돈(잔돈)관리

# Skills

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat&logo=styled-components&logoColor=white"/>

`로컬 상태 관리`: ContextApi + Reducer

`데이터 요청`: axios

`디자인`: stlyed-component + MUI, figma

`사용자 UX`: React.Suspense, React.Error-boundary

# 간단한 데모

### 사용자 inputValidation Toast 알람 예시 1

![ezgif com-gif-maker-3](https://user-images.githubusercontent.com/71386219/169485246-0276ca18-f074-4e66-92a9-dec2e237e32d.gif)

### 사용자 inputValidation Toast 알람 예시 2

![ezgif com-gif-maker](https://user-images.githubusercontent.com/71386219/169485272-b9600a2c-5dc2-4685-9686-1e3bff2e361e.gif)

### 데이터 fetching실패 error boundary 적용

![ezgif com-gif-maker-2](https://user-images.githubusercontent.com/71386219/169485266-902d80e8-46ec-4ec3-b2ff-24482ac7b462.gif)
