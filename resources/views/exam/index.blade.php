<!DOCTYPE html>
<html>
	<head>
		<title>Javascript azmoon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/exam.css">
	</head>
	<body>

        <div id="q1">
            <p>1.سوال</p>
            <div class="form-group">
                <input type="radio" for="exam" name="q1" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q1" /> جواب درست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q1" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q1" /> جواب نادرست <br/>
            </div>
        </div>

        <div id="q2">
            <p>2.سوال</p>
            <div class="form-group">
                <input type="radio" for="exam" name="q2" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q2" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q2" /> جواب درست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q2" /> جواب نادرست <br/>
            </div>
        </div>

        <div id="q3">
            <p>3.سوال</p>
            <div class="form-group">
                <input type="radio" for="exam" name="q3" /> جواب درست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q3" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q3" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q3" /> جواب نادرست <br/>
            </div>
        </div>

        <div id="q4">
            <p>4.سوال</p>
            <div class="form-group">
                <input type="radio" for="exam" name="q4" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q4" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q4" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q4" /> جواب درست <br/>
            </div>
        </div>

        <div id="q5">
            <p>5.سوال</p>
            <div class="form-group">
                <input type="radio" for="exam" name="q5" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q5" /> جواب درست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q5" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q5" /> جواب نادرست <br/>
            </div>
        </div>

        <div id="q6">
            <p>6.سوال</p>
            <div class="form-group">
                <input type="radio" for="exam" name="q6" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q6" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q6" /> جواب درست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q6" /> جواب نادرست <br/>
            </div>
        </div>

        <div id="q7">
            <p>7.سوال</p>
            <div class="form-group">
                <input type="radio" for="exam" name="q7" /> جواب درست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q7" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q7" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q7" /> جواب نادرست <br/>
            </div>
        </div>

        <div id="q8">
            <p>8.سوال</p>
            <div class="form-group">
                <input type="radio" for="exam" name="q8" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q8" /> جواب درست <br/>
            </div>
            <div class="form-group">
                <input type="radio" for="exam" name="q8" /> جواب نادرست <br/>
            </div>
            <div class="form-group">
                <input for="exam" type="radio" for="exam" name="q8" /> جواب نادرست <br/>
            </div>
        </div>
        <form id="exam" action="/result" method="POST">
            {{ csrf_field() }}
            <button id="show_result" type="submit">مشاهده نتیجه</button>
        </form>
        <div class="result">جواب درست : <span id="correct"></span></div>
        <div class="result">جواب نادرست : <span id="wrong"></span></div>
        <div class="result">بدون جواب : <span id="empty"></span></div>
           	
		<script src="/js/exam.js"></script>
	</body>
</html>