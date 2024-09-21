function Union(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(Union('Abhi', 'Vish'));
