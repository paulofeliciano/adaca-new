<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
    {   
        $request->validate([
            'conversation_id' => 'required',
            'messages' => 'required'
        ]);
        $message = $request->input('messages');

        if (str_contains(strtolower($request->input('messages')), 'hello') || str_contains(strtolower($request->input('messages')), 'hi')) { 
            $message = 'Welcome to StationFive.';
        }

        if (str_contains(strtolower($request->input('messages')), 'goodbye') || str_contains(strtolower($request->input('messages')), 'bye')) { 
            $message = 'Thank you, see you around.';
        }

        return redirect()->back()->with([
            'message' => $message, 
            'conversation_id' => $request->input('conversation_id')
        ]);
    }

    public function create()
    {
        return view('welcome');
    }
}
