const postList = [
    {
      "no": 1,
      "title": "회원가입 이벤트",
      "content": "회원가입 이벤트!!!!!  "  ,   
      "createDate": "2021-10-25",
      "readCount": 6
    },
    {
      "no": 2,
      "title": "2023년까지 오만원 이상 구매시 배송비 무료",
      "content": "오만원 이상 구매시 배송비 무료. 단, 제주도 및 산간지방은 1000원",
      "createDate": "2021-11-22",
      "readCount": 5
    },
    {
      "no": 3,
      "title": "리뷰 이벤트",
      "content": "리뷰등록을 해주시는 분께 10000원 할인 쿠폰 발급 이벤트",
      "createDate": "2021-12-25",
      "readCount": 1
    },

  ];
   
  const getPostByNo = no => {
    const array = postList.filter(x => x.no == no);
    if (array.length == 1) {
      return array[0];
    }
    return null;
  }
   
  export {
    postList,
    getPostByNo
  };
  