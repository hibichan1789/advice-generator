# ランダム名言ジェネレータ
このプロダクトは[Advice Slip JSON API](https://api.adviceslip.com/)を使用しています  
.envファイルは.env.sampleのものをコピーして例のところをAPIのUrlに変更してください  
cp .env.sample .env
## 今回学びたいこと
fetchで外部APIの連携をとる  
外部APIの型をtypescriptの型で正しく定義して、型安全な連携をとれるようにする  

## 変更点、修正点
main.tsに外部API（Advice Slip JSON API）を叩いてJSONを受け取る機能の実装      

## 今回学んだこと
typescriptで環境変数を使うと安全にできる  
環境変数を使うには.envファイルにAPIのUrlやAPIキーを書く(これは絶対に.gitignoreで除外する)   
meta.envのところでエラーが出るときはsrcディレクトリ内にvite-env.d.tsファイルを作成して  
/// <reference types="vite/client" />これのみを入れる  
あとは下のように環境変数を使えるようになる  
const apiUrl = import.meta.env.VITE_API_URL;  
clickされた瞬間にボタンを使えなくして連続で押されるのを防ぐことが大切  
## 所感
typescriptの最初の環境構築のコマンドがスムーズにできた  
