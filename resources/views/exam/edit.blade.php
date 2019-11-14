@extends('layouts.master')

@section('content')
    <div class="container">
        <h2 class="content-heading">ویرایش آزمون</h2>

        <form action="/exam" method="post" id="edit-exam-form">
            {{ csrf_field() }}
            @method('PUT')
            <div class="row">
                <div class="col-md-12">
                    <div class="block">
                        <div class="block-content">
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="title" name="title" placeholder="عنوان آزمون..." value="{{ $exam->title }}">
                                    </div>
                                </div>
                               
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type="number" class="form-control" id="time" name="time" placeholder="زمان آزمون..." value="{{ $exam->time }}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            @foreach($exam->questions as $question)
                <div class="block questions">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">سوال : {{ $loop->index + 1}}</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                        </div>
                    </div>
                    <div class="block-content">
                        <div class="form-group row">
                            <div class="col-12">
                                <textarea class="form-control" id="sample-q" name="sample-q" rows="2" placeholder="متن سوال را اینجا وارد کنید...">{{ $question->text }}</textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="sample-option-1" name="sample-option-1" placeholder="گزینه یک..." value="{{ $question->option1 }}">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="sample-option-2" name="sample-option-2" placeholder="گزینه دو..." value="{{ $question->option2 }}">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="sample-option-3" name="sample-option-3" placeholder="گزینه سه..." value="{{ $question->option3 }}">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="sample-option-4" name="sample-option-4" placeholder="گزینه چهار..." value="{{ $question->option4 }}">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <div class="col-md-2">
                                <p class="correct-option">گزینه صحیح : </p>
                            </div>
                            <div class="col-md-8">
                                <div class="custom-control custom-radio custom-control-inline mb-5">
                                    <input class="custom-control-input" type="radio" name="sample-inline-radios" id="sample-inline-radio1" value="1" @if($question->answer == 1) checked @endif>
                                    <label class="custom-control-label" for="sample-inline-radio1">یک</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline mb-5">
                                    <input class="custom-control-input" type="radio" name="sample-inline-radios" id="sample-inline-radio2" value="2" @if($question->answer == 2) checked @endif>
                                    <label class="custom-control-label" for="sample-inline-radio2">دو</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline mb-5">
                                    <input class="custom-control-input" type="radio" name="sample-inline-radios" id="sample-inline-radio3" value="3" @if($question->answer == 3) checked @endif>
                                    <label class="custom-control-label" for="sample-inline-radio3">سه</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline mb-5">
                                    <input class="custom-control-input" type="radio" name="sample-inline-radios" id="sample-inline-radio4" value="4" @if($question->answer == 4) checked @endif>
                                    <label class="custom-control-label" for="sample-inline-radio4">چهار</label>
                                </div>
                            </div>
                            
                        </div>        
                    </div>
                </div>
            @endforeach

            <div class="row">
                <div class="col-12">
                    <button id="submit" type="submit" class="btn btn-success" data-toggle="click-ripple"><i class="fa fa-save"></i> ذخیره</button>
                </div>
            </div>
        </form>
    </div>
@endsection

@section('scripts')
    <script src="/js/pages/exam-edit.js"></script>
@endsection