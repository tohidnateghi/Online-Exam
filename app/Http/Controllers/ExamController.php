<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExamController extends Controller
{
    public function index() {
        return view('exam.index');
    }

    public function create() {
        return view('exam.create');
    }

    public function result(Request $request) {
        $answer = array(
            ['id' => 1, 'answer' => 2],
            ['id' => 2, 'answer' => 3],
            ['id' => 3, 'answer' => 1],
            ['id' => 4, 'answer' => 4],
            ['id' => 5, 'answer' => 2],
            ['id' => 6, 'answer' => 3],
            ['id' => 7, 'answer' => 1],
            ['id' => 8, 'answer' => 2],
        );

        $correct = 0;
        $wrong = 0;

        foreach($request->all() as $key => $value) {
            foreach($answer as $k => $v) {
                if($v['id'] == str_replace('q', '', $key)) {
                    if($v['answer'] == $value) {
                        $correct++;
                    }
                    else {
                        $wrong++;
                    }
                }
            }
        }

        // return $correct.' '.$wrong;

        return response()->json($answer);
    }
}
