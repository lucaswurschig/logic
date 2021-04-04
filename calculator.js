export default function compare(x, y) {
    let msg;

    if (x > y) {
        msg = `o numero ${x} e maior do que o numero ${y}.`;
    } else if (x < y) {
        msg = `o numero ${x} e menor do que o numero ${y}.`;
    }
    else {
        msg = `Os dois numeros sao iguais!`;
    }

    console.log(msg);
}
