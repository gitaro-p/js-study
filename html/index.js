const myFruit = 'イチゴ';

switch (myFruit) {
  case 'りんご':
    alert('りんごです');
    break;

    case 'みかん':
      alert('みかんです');
      break;

      default:
        alert('その他です');
        break;
}

/*複数の値をまとめて処理

const myFruit = 'りんご';

switch (myFruit) {
  case 'りんご':
  case 'みかん':
    alert('りんごかみかんです');
    break;
    default:
      alert('その他です');
}*/

