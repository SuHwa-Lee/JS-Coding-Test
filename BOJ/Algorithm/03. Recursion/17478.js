// 재귀함수가 뭔가요?

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let answer = '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n';
let C = 0;

const arr = ['"재귀함수가 뭔가요?"\n',
  '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n',
  '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n',
  '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n'
]

function recursion(cnt) {
  if(cnt === 0) {
    answer +=  "____".repeat(C) + '"재귀함수가 뭔가요?"\n';
    answer +=  "____".repeat(C) + '"재귀함수는 자기 자신을 호출하는 함수라네"\n';
    answer += "____".repeat(C) + "라고 답변하였지.\n";
    return;
  }

  for(let i=0; i<4; i++) {
    answer += "____".repeat(C) + arr[i];
  }
  C++;
  recursion(cnt-1);
  answer += "____".repeat(--C) + "라고 답변하였지.\n";
}

recursion(+input[0]);
console.log(answer);