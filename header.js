const template = document.createElement('template');

template.innerHTML = `
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <title>Header</title>
</head>

<header>
    <table>
        <tr>
            <td rowspan="2"><img src="logo.jpg" width="140PX" height="120PX"></td>
            <td>
                <H1>Kolozrvar's Tau Sar Piah Realm</H1> <!-- chink: 恐龙–九龙 炸弹文党 -->
                <p class="tagline">The On-line Non-Cooking Repository</p>
            </td> 
        </tr>
        <tr>
            <td class="TOP-NAV">
                <div class="LEFT"><a href="/index.html">Home</a></div>
                <div class="LEFT"><a href="/vlog.html">Gary's Vlog</a></div>
                <div class="LEFT"><a href="/misc.html">Miscellaneous</a></div>
                <div class="LEFT"><a href="/news/index.html">News & Updates</a></div>
                <div class="CLEAR"></div>
            </td>
        </tr>
    </table>
</header>
`;

document.body.appendChild(template.content);