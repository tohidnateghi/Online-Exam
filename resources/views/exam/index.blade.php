@extends('layouts.master')

@section('content')
<!-- Page Content -->
<div class="content">

    <h2 class="content-heading">لیست آزمون ها</h2>
 
    @include('partials.messages')
    <!-- Hover Table -->
    <div class="block">
        <div class="block-content">
            <table class="table table-hover table-vcenter">
                <thead>
                    <tr>
                        <th class="text-center" style="width: 50px;">#</th>
                        <th>عنوان آزمون</th>
                        <th class="text-center">زمان</th>
                        <th class="text-center">تعداد سوال</th>
                        <th class="text-center" style="width: 100px;">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($exams as $exam)
                        <tr id={{ $exam->id }} class="exam-detail">
                            <th class="text-center number" scope="row">{{ $loop->index + 1 }}</th>
                            <td>{{ $exam->title }}</td>
                            <td class="text-center">{{ $exam->time }} دقیقه</td>
                            <td class="text-center">{{ $exam->questions()->count() }}</td>
                            <td class="text-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-secondary" data-toggle="tooltip" title="ویرایش">
                                        <i class="fa fa-pencil"></i>
                                    </button>
                                    <button type="button" class="btn btn-sm btn-secondary btn-delete" data-toggle="tooltip" title="حذف">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <!-- END Hover Table -->

    <!-- Fade In Modal -->
    <div class="modal fade" id="modal-fadein" tabindex="-1" role="dialog" aria-labelledby="modal-fadein" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="block block-themed block-mode-loading-refresh block-transparent mb-0">
                    <div class="block-header bg-danger">
                        <h3 class="block-title">تایید حذف آزمون</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="block-content">
                        <p>آیا مطمئن هستید؟</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">خیر</button>
                    <button id="submit" type="button" class="btn btn-alt-danger">بله</button>
                </div>
            </div>
        </div>
    </div>
    <!-- END Fade In Modal -->
</div>
<!-- END Page Content -->
@endsection

@section('scripts')
    <script>
        var action = "/exam/";
        var _token = "{{ csrf_token() }}";
    </script>
    <script src="/js/plugins/bootstrap-notify/bootstrap-notify.min.js"></script>
    <script src="/js/pages/exam-index.js"></script>
@endsection