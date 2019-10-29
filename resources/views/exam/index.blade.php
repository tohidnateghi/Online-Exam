@extends('layouts.master')

@section('content')
<div class="container">
    <h4 class="mt-4">آزمون فرضی</h4>
    <div class="row">
        <div class="col-lg-6">
            <div id="q1">
                <p>1.سوال</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q1" id="answer-1"> جواب
                    نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q1"> جواب درست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q1"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q1"> جواب نادرست
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div id="q2">
                <p>2.سوال</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q2"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q2"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q2"> جواب درست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q2"> جواب نادرست
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div id="q3">
                <p>3.سوال</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q3"> جواب درست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q3"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q3"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q3"> جواب نادرست
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div id="q4">
                <p>4.سوال</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q4"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q4"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q4"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q4"> جواب درست
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div id="q5">
                <p>5.سوال</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q5"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q5"> جواب درست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q5"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q5"> جواب نادرست
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div id="q6">
                <p>6.سوال</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q6"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q6"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q6"> جواب درست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q6"> جواب نادرست
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div id="q7">
                <p>7.سوال</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q7"> جواب درست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q7"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q7"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q7"> جواب نادرست
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div id="q8">
                <p>8.سوال</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q8"> جواب نادرست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q8"> جواب درست
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" for="exam" name="q8"> جواب نادرست
                </div>
                <div class="form-check">
                    <input for="exam" class="form-check-input" type="radio" for="exam" name="q8"> جواب
                    نادرست
                </div>
            </div>
        </div>
    </div>

    <div class="row my-3">
        <div class="col-md-2">
            <form id="exam" action="/result" method="POST">
                {{ csrf_field() }}
                <button class="btn btn-light" id="show_result" type="submit">مشاهده نتیجه</button>
            </form>
        </div>
        <div class="col-md-2 d-none">
            جواب درست : <span id="correct"></span>
        </div>
        <div class="col-md-2 d-none">
            جواب نادرست : <span id="wrong"></span>
        </div>
        <div class="col-md-2 d-none">
            بدون جواب : <span id="empty"></span>
        </div>
    </div>

</div>
@endsection

@section('scripts')
<script src="/js/pages/exam.js"></script>
@endsection