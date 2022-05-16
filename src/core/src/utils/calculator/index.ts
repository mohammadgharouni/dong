interface List {
  name: string;
  amount: number;
}
interface Result {
  from: string;
  to: string;
  amount: number;
}
export const dongCalculator = (list: List[]) => {
  const average =
    list.reduce((prev, curr) => prev + curr.amount, 0) / list.length;

  const shouldRecieve: List[] = [];
  const shouldPay: List[] = [];
  list.forEach((person) => {
    const a = person.amount - average;
    a > 0
      ? shouldRecieve.push({ ...person, amount: a })
      : shouldPay.push({ ...person, amount: -a });
  });

  const result: Result[] = [];

  shouldRecieve.forEach((recievePerson, recieveindex) => {
    shouldPay.forEach((payPerson) => {
      if (shouldRecieve[recieveindex].amount <= 0) return;
      const shouldPayAmount = payPerson.amount;
      const paidAmount =
        recievePerson.amount > shouldPayAmount
          ? shouldPayAmount
          : recievePerson.amount;
      result.push({
        from: payPerson.name,
        to: recievePerson.name,
        amount: paidAmount,
      });
      recievePerson.amount = recievePerson.amount - paidAmount;
      payPerson.amount =
        recievePerson.amount > shouldPayAmount
          ? 0
          : Math.abs(payPerson.amount - paidAmount);
    });
  });

  return result;
};
