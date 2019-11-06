@extends('layouts.master')

@section('content')
<!-- Page Content -->
<div class="content">
    <!-- Bootstrap Design -->
    <h2 class="content-heading">عنوان آزمون : {{ $exam->title }}</h2>
 
    <div class="row">
            
            <div class="col-md-12">
                <!-- Default Elements -->
                <div class="block block-mode-loading-refresh" id="exam-block">
                    <div class="block-content block-content-full block-content-sm bg-body-light font-size-sm">
                        <div class="row">
                            <div class="col-sm-4">تعداد سوالات : {{ $exam->questions->count() }}</div>
                            <div class="col-sm-4">زمان آزمون : {{ $exam->time }} دقیقه</div>
                            <div class="col-sm-4">زمان باقیمانده : 
                                <span id="remaining-time" class="px-2">
                                    <span id="seconds"></span>:
                                    <span  id="minutes"></span>:
                                    <span id="hours"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="block-content">
                        <div class="progress push" style="height: 8px;">
                            <div id="progressbar" class="progress-bar bg-success" role="progressbar" style="width: 100%;"></div>
                        </div>
                        <form action="{{ route('result', ['id' => $exam->id])}}" method="post" id="exam-form">
                            {{ csrf_field() }}
                            @foreach($exam->questions as $question)
                                <div class="question" id="q-{{ $question->id }}">
                                    <h5>{{ $loop->index + 1 }}. {{ $question->text }}</h5>
                                    <div class="form-group row">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-radio mb-5">
                                                        <input class="custom-control-input" type="radio" name="option-radios-{{ $question->id }}"
                                                            id="option-radio-{{ $question->id }}-1" value="option1">
                                                        <label class="custom-control-label" for="option-radio-{{ $question->id }}-1">{{ $question->option1 }}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-radio mb-5">
                                                        <input class="custom-control-input" type="radio" name="option-radios-{{ $question->id }}"
                                                            id="option-radio-{{ $question->id }}-2" value="option2">
                                                        <label class="custom-control-label" for="option-radio-{{ $question->id }}-2">{{ $question->option2 }}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-radio mb-5">
                                                        <input class="custom-control-input" type="radio" name="option-radios-{{ $question->id }}"
                                                            id="option-radio-{{ $question->id }}-3" value="option3">
                                                        <label class="custom-control-label" for="option-radio-{{ $question->id }}-3">{{ $question->option3 }}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-radio mb-5">
                                                        <input class="custom-control-input" type="radio" name="option-radios-{{ $question->id }}"
                                                            id="option-radio-{{ $question->id }}-4" value="option4">
                                                        <label class="custom-control-label" for="option-radio-{{ $question->id }}-4">{{ $question->option4 }}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach

                            <button id="show_result" type="submit" class="btn btn-outline-primary my-3">مشاهده نتیجه</button>
                        </form>

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
        var examTime = {{ $exam->time }};
    </script>
    <script src="/js/pages/exam-show.js"></script>
@endsection