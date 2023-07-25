import PaymentOption from "@superfluid-finance/widget";

const paymentOptions = [
  {
    chainId: 1,
    receiverAddress: "0x7BDa037dFdf9CD9Ad261D27f489924aebbcE71Ac",
    superToken: {
      address: "0x1ba8603da702602a8657980e825a6daa03dee93a",
    },
    flowRate: {
      amountEther: "100",
      period: "month",
    },
  },

  {
    chainId: 421613,
    receiverAddress: "0x7BDa037dFdf9CD9Ad261D27f489924aebbcE71Ac",
    superToken: {
      address: "0xac7a5cf2e0a6db31456572871ee33eb6212014a9",
    },
    flowRate: {
      amountEther: "1",
      period: "month",
    },
  },
];

export default paymentOptions;
