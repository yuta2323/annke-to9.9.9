document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // デフォルトの送信動作をキャンセル

    // フォームデータを収集
    const formData = new FormData(event.target);

    // フォームデータをオブジェクトに変換
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        comments: formData.get("comments")
    };

    // Google Apps ScriptのWebアプリURLにデータをPOST
    fetch("https://script.google.com/macros/s/AKfycbzGulP8wMrKtJJHqMUTZ0Fbk1XD8tcu4ORunXiyMS0kFro8Jvwsfqe95FIuCit6uE7C/exec", {
        method: "POST",
        body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(data => {
        alert("送信完了: " + data);
        event.target.reset(); // フォームをリセット
    })
    .catch(error => {
        alert("送信中にエラーが発生しました: " + error);
    });
});