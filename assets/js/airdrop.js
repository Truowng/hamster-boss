const WALLETS = [
  "UQCZo31ZuBzE_QmvhaCuLJxR4dw9Y7Z-IqCoNJCunCSiU8qr",
  "UQAosJ_xMH-5omypa8q5qgwqnsvVBH8sv0B0hGRGSo3t2Y4T",
  "UQDWGjmtvCdc2dphkj6aSPLLhhDnjlIlqxjtU8M6ByfhnDHO",
  "UQAoL6ygJtcUm9lRAb8ZyUFswIeX2HJKhtuDmWeekmnIJvWy",
  "UQAT-DjN3VH2vro9oQN1gzDZRuuVukPmLRFrQCgQI7ONHF5M",
  "UQD4Gf9H3rDP8ECa5LVRsGW34sNAlvZG-t6Crl9gBGV2MalW",
  "UQAuJUKigzrATkncpOjQqRq0f7Dfs5SreqOC7gtl3fVrJdeR",
  "UQDOsen8imUs_gBCq3mhpKa45EEFYdgs4kshwjWITDwAbTQK",
  "UQBBjTc0zMndjmnZhSGdygYRk37Cl1RzRJBnmabMUDbhtSUO",
  "UQBeQEaJZXU4Nws8_p2SBzA6VQZ69sg8vLpdZp9GRW1i1wjm",
  "UQCIc8rSQc--LQztyLeEJtjJm_dQCRYUnADl8kGiaIrqjeqj",
  "UQBmi4yg8h2DBvuTA4Yp-ck8FE-5y-GmegmvzhLKEiBv-xAT",
  "UQA1Y0ncaK-U-xXcNBwuMtzxpfQ8QFfBjT8gPC8Tex_az0-K",
  "UQAN7nPFChOvBrX4_QzYQQ1ElLCiWQOtFpordNLkAbmUjM9K",
  "UQBrn6iBYPxEylQJX8K2xg-UlslPQZRKzjPfcAtztu80h22b",
  "UQCcrx-cn_2Q-3lf2poJRcw0EnVI3FbFFdTWfRVUdS9xclEs",
  "UQBk-wf7uZmgv1sotAp1im8vZyW5mVvI11w32j8_ge9MC23R",
  "UQBd72SpVd4nkKoewvUqxe4x8C_Q2ttNk9FtLC3mU3E5CLwf",
  "UQBIWUbLw5gCyDVcd_4b-pX-wRvCV1g5JCNQDFGwnNbsTJOs",
  "UQADtE3dW5am2KrjU2behljsm1Pzq3Kc9ovbGQ34u-45hUCJ",
  "UQBBFlPAvTeYnMmvLuzCLtQx1RSPnc8QH5aJMGTcIqg4nmo2",
  "UQChQPUb6BJQJcbXwvSV9oud6jJCKIhcUCfulgf121-oVehn",
];

const toastSuccess = {
  title: "Congrats",
  content: "Your wallet was in airdrop list.",
  img: "./assets/images/success.svg",
};
const toastFailed = {
  title: "Sorry",
  content: "Your wallet wasn't in airdrop list.",
  img: "./assets/images/failed.svg",
};
const toastNoWallet = {
  title: "no wallet found",
  content: "Please enter your wallet.",
  img: "./assets/images/failed.svg",
};

const input = document.querySelector(".check-wallet .input-wrapper input");

const toastLive = document.querySelector(".toast");
const toastImg = toastLive.querySelector("img");
const toastTitle = toastLive.querySelector("strong");
const toastContent = toastLive.querySelector(".toast-body");
const toastLine = toastLive.querySelector(".line");

const checkWallet = () => {
  let value = input.value;
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
  const time = toastLive.getAttribute("data-bs-delay");
  toastLine.style.animation = `countDown linear ${time - 50}ms forwards`;
  if (value == "") {
    toastImg.setAttribute("src", toastNoWallet.img);
    toastTitle.innerHTML = toastNoWallet.title;
    toastContent.innerHTML = toastNoWallet.content;
    toastBootstrap.show();
  } else if (WALLETS.includes(value)) {
    toastImg.setAttribute("src", toastSuccess.img);
    toastTitle.innerHTML = toastSuccess.title;
    toastContent.innerHTML = toastSuccess.content;
    toastBootstrap.show();
  } else {
    toastImg.setAttribute("src", toastFailed.img);
    toastTitle.innerHTML = toastFailed.title;
    toastContent.innerHTML = toastFailed.content;
    toastBootstrap.show();
  }
};
