@extends('layouts.master')

@section('content')
<!-- Page Content -->
<div class="content">
    <!-- Bootstrap Design -->
    <h2 class="content-heading">عنوان آزمون : اندیشه اسلامی 1</h2>
 
    <div class="row">
            <div class="col-md-12">
                <!-- Default Elements -->
                <div class="block block-mode-loading-refresh" id="exam-block">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">کد درس : 8798</h3>
                        <div class="block-options">
                            <div class="block-options-item">تعداد سوالات : 20</div>
                            <div class="block-options-item">زمان آزمون : 30 دقیقه</div>
                        </div>
                    </div>
                    <div class="block-content">
                        <div class="question" id="q-1">
                            <h5>1. از دیدگاه کسانی که هستی را برابر با ماده میدانند کدام گزینه در مورد انسان صحیح است؟</h5>
                            <div class="form-group row">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="custom-control custom-radio mb-5">
                                                <input class="custom-control-input" type="radio" name="example-radios"
                                                    id="example-radio1" value="option1">
                                                <label class="custom-control-label" for="example-radio1">انسان با مرگ نابود میشود.</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="custom-control custom-radio mb-5">
                                                <input class="custom-control-input" type="radio" name="example-radios"
                                                    id="example-radio2" value="option2">
                                                <label class="custom-control-label" for="example-radio2">روح انسان نابود شدنی نیست.</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="custom-control custom-radio mb-5">
                                                <input class="custom-control-input" type="radio" name="example-radios"
                                                    id="example-radio3" value="option3">
                                                <label class="custom-control-label" for="example-radio3">انسان موجود ماندگار است.</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="custom-control custom-radio mb-5">
                                                <input class="custom-control-input" type="radio" name="example-radios"
                                                    id="example-radio4" value="option4">
                                                <label class="custom-control-label" for="example-radio4">فقط جسم انسان با مرگ نابود می شود.</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="question" id="q-2">
                            <h5>2. کدام گزینه بیانگر دلیل فلاسفه بر غیر مادی بودن روح است؟</h5>
                            <div class="form-group row">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="custom-control custom-radio mb-5">
                                                <input class="custom-control-input" type="radio" name="example-radios2"
                                                    id="example-radio5" value="option1">
                                                <label class="custom-control-label" for="example-radio5">انسان با مرگ نابود میشود.</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="custom-control custom-radio mb-5">
                                                <input class="custom-control-input" type="radio" name="example-radios2"
                                                    id="example-radio6" value="option2">
                                                <label class="custom-control-label" for="example-radio6">روح انسان نابود شدنی نیست.</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="custom-control custom-radio mb-5">
                                                <input class="custom-control-input" type="radio" name="example-radios2"
                                                    id="example-radio7" value="option3">
                                                <label class="custom-control-label" for="example-radio7">انسان موجود ماندگار است.</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="custom-control custom-radio mb-5">
                                                <input class="custom-control-input" type="radio" name="example-radios2"
                                                    id="example-radio8" value="option3">
                                                <label class="custom-control-label" for="example-radio8">فقط جسم انسان با مرگ نابود می شود.</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button id="show_result" type="button" class="btn btn-outline-primary my-3">مشاهده نتیجه</button>

                    </div>
                    <div id="result" class="block-content block-content-full block-content-sm bg-body-light font-size-sm d-none">
                        <div class="row">
                            <div class="col-md-4">
                                جواب درست : <span id="correct" class="text-success"></span>
                            </div>
                            <div class="col-md-4">
                                جواب اشتباه : <span id="wrong" class="text-danger"></span>
                            </div>
                            <div class="col-md-4">
                                بدون جواب : <span id="empty"></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <!-- END Default Elements -->
            </div>
    
        </div>
    <!-- END Bootstrap Design -->
</div>
<!-- END Page Content -->
@endsection

@section('scripts')
    <script>
        var _token = '{{ csrf_token() }}';
        var action = '/result';
    </script>
    <script src="/js/pages/exam.js"></script>
@endsection