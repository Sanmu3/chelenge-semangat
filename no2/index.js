namaSantri = (nama, nilai) => {

    document.write('Nama Santri : ' + nama + '<br/>');
    switch (nilai) {
        case 'A':
            document.write('Nilai nya sangat baik');
            break;
        case 'B':
            document.write('Nilai nya baik');
            break;
        case 'C':
            document.write('Nilai nya cukup')
            break;
        default:
            document.write('Nilai nya Kurang');
            break;
    }
    document.write('<hr>')
}

namaSantri('panjul', 'A')
namaSantri('joni', 'C')
namaSantri('Tono', 'B')
namaSantri('Kevin', 'D')
