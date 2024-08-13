const template = document.createElement('template');

template.innerHTML = `
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <title>Footer</title>
</head>
<html>
    <footer>
        <div class="LEFT">
            <a href="#top">Back to top</a>
        </div>
        <div class="LEFT">
            <a href="/index.html">返回主页</a>
        </div>
        <div class="LEFT">
            <a href="">Previous Page</a>
        </div>
        <div class="LEFT">
            <a href="/contact.html">Tell me something</a>
        </div>
    </footer>
`;

document.body.appendChild(template.content);