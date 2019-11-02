@extends('layouts.master')

@section('content')
    <div class="container">
        <h2 class="content-heading">افزودن آزمون جدید</h2>

        <div id="blockSample" class="block d-none">
            <div class="block-header block-header-default">
                <h3 class="block-title">سوال : <span class="q-number"></span></h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                </div>
            </div>
            <div class="block-content">
                <div class="form-group row">
                    <div class="col-12">
                        <textarea class="form-control" id="sample-q" name="sample-q" rows="2" placeholder="متن سوال را اینجا وارد کنید..."></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="sample-answer-1" name="sample-answer-1" placeholder="گزینه یک...">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="sample-answer-2" name="sample-answer-2" placeholder="گزینه دو...">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="sample-answer-3" name="sample-answer-3" placeholder="گزینه سه...">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="sample-answer-4" name="sample-answer-4" placeholder="گزینه چهار...">
                        </div>
                    </div>
                </div>
                
                <div class="form-group row">
                    <div class="col-md-2">
                        <p class="correct-answer">گزینه صحیح : </p>
                    </div>
                    <div class="col-md-8">
                        <div class="custom-control custom-radio custom-control-inline mb-5">
                            <input class="custom-control-input" type="radio" name="sample-inline-radios" id="sample-inline-radio1" value="1">
                            <label class="custom-control-label" for="sample-inline-radio1">یک</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline mb-5">
                            <input class="custom-control-input" type="radio" name="sample-inline-radios" id="sample-inline-radio2" value="2">
                            <label class="custom-control-label" for="sample-inline-radio2">دو</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline mb-5">
                            <input class="custom-control-input" type="radio" name="sample-inline-radios" id="sample-inline-radio3" value="3">
                            <label class="custom-control-label" for="sample-inline-radio3">سه</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline mb-5">
                            <input class="custom-control-input" type="radio" name="sample-inline-radios" id="sample-inline-radio4" value="4">
                            <label class="custom-control-label" for="sample-inline-radio4">چهار</label>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-outline-danger btn-sm float-left remove">حذف</button>
                    </div>
                </div>        
            </div>
        </div>

        <form action="/exam" method="post" id="create-exam-form">
            {{ csrf_field() }}
            <div class="row">
                <div class="col-md-12">
                    <div class="block">
                        <div class="block-content">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="title" name="title" placeholder="عنوان آزمون...">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type="number" class="form-control" id="code" name="code" placeholder="کد درس...">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type="number" class="form-control" id="time" name="time" placeholder="زمان آزمون...">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="questions">

            </div>

            <div class="row">
                <div class="col-12">
                    <button id="add" type="button" class="btn btn-outline-primary">افزودن سوال</button>
                    <button type="submit" class="btn btn-outline-success">ذخیره</button>
                </div>
            </div>
        </form>
    </div>
@endsection

@section('scripts')
    <script src="/js/pages/exam-create.js"></script>
@endsection