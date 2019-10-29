@extends('layouts.master')

@section('content')
<div class="container">
    <h4 class="my-4">افزودن آزمون جدید</h4>
    <form>

        <div class="border p-2 my-2">
            <div class="form-group">
                <textarea class="form-control" id="question1" rows="2" placeholder="متن سوال"></textarea>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="option1" placeholder="گزینه یک">
                </div>
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="option2" placeholder="گزینه دو">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="option3" placeholder="گزینه سه">
                </div>
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="option4" placeholder="گزینه چهار">
                </div>
            </div>
            <div class="form-row">
                <legend class="col-form-label col-lg-2 col-sm-3 pt-0">گزینه صحیح : </legend>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="correct1" name="correct-answer" value="correct1">
                    <label class="form-check-label" for="correct1">یک</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="correct2" name="correct-answer" value="correct2">
                    <label class="form-check-label" for="correct2">دو</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="correct3" name="correct-answer" value="correct3">
                    <label class="form-check-label" for="correct3">سه</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="correct4" name="correct-answer" value="correct4">
                    <label class="form-check-label" for="correct4">چهار</label>
                </div>

            </div>

        </div>

        <button type="button" class="btn btn-primary">افزودن سوال</button>
        <button type="submit" class="btn btn-success">ذخیره</button>
    </form>
</div>
@endsection