@extends('layouts.master')

@section('content')
<div class="container">

    <h2 class="content-heading">افزودن آزمون جدید</h2>
    <div id="questions">
        <div class="block">
            <div class="block-content">
                <div class="form-group row">
                    <div class="col-12">
                        <textarea class="form-control" id="mega-bio" name="mega-bio" rows="2" placeholder="متن سوال را اینجا وارد کنید"></textarea>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="mega-city" name="mega-city" placeholder="گزینه یک">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="mega-city" name="mega-city" placeholder="گزینه دو">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="mega-city" name="mega-city" placeholder="گزینه سه">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="mega-city" name="mega-city" placeholder="گزینه چهار">
                        </div>
                    </div>
                </div>
                
                <div class="form-group row">
                    <div class="col-md-2">
                        <p>گزینه صحیح : </p>
                    </div>
                    <div class="col-md-8">
                        <div class="custom-control custom-radio custom-control-inline mb-5">
                            <input class="custom-control-input" type="radio" name="example-inline-radios" id="example-inline-radio1" value="option1">
                            <label class="custom-control-label" for="example-inline-radio1">یک</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline mb-5">
                            <input class="custom-control-input" type="radio" name="example-inline-radios" id="example-inline-radio2" value="option2">
                            <label class="custom-control-label" for="example-inline-radio2">دو</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline mb-5">
                            <input class="custom-control-input" type="radio" name="example-inline-radios" id="example-inline-radio3" value="option3">
                            <label class="custom-control-label" for="example-inline-radio3">سه</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline mb-5">
                            <input class="custom-control-input" type="radio" name="example-inline-radios" id="example-inline-radio4" value="option3">
                            <label class="custom-control-label" for="example-inline-radio4">چهار</label>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-outline-danger btn-sm float-left remove">حذف</button>
                    </div>
                </div>        
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <button id="add" type="button" class="btn btn-outline-primary">افزودن سوال</button>
            <button type="button" class="btn btn-outline-success">ذخیره</button>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script src="/js/pages/exam-create.js"></script>
@endsection