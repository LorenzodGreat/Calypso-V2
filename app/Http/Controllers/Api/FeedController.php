<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Feed;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\JsonResponse;
use Illuminate\Support\Str;

class FeedController extends Controller
{
    public function index()
    {
        $Data = Feed::all();
        if (count($Data) === 0) {
            return response()->json([
                'status' => 204,
                'data' => $Data,
            ]);
        } else {
            return response()->json([
                'status' => 200,
                'data' => $Data,
            ]);
            # code...
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:50|unique:feeds,name',
            'description' => 'required|max:250|min:20',
            'image' => 'required|image|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'validator_errors' => $validator->errors(),
            ]);
        } else {
            $Model = new Feed;
            $Model->uuid = Str::uuid();
            $Model->name = $request->input('title');
            $Model->desc = $request->input('description');
            $image = $request->file('image');
            $extened = $image->getClientOriginalExtension();
            $image_name = time() . '.' . $extened;
            $image->move('uploads/feed/', $image_name);
            $Model->img = 'uploads/feed/' . $image_name;
            $Model->save();
            return response()->json([
                'status' => 200,
                'message' => 'Feed Created Successfully',
            ]);
        }
    }

    public function edit($id)
    {
        $edit_feed = Feed::where('uuid', $id)->first();
        if ($edit_feed) {
            return response()->json([
                'status' => 200,
                'data' => $edit_feed,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Such Feed Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'max:50',
            'description' => 'max:250|min:20',
            'image' => 'image|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'validator_errors' => $validator->errors(),
            ]);
        } else {

            $Store_Feed = Feed::where('uuid', $id)->first();

            if ($Store_Feed) {

                $Store_Feed->name = $request->input('title');
                $Store_Feed->desc = $request->input('description');
                if ($request->hasFile('image')) {
                    # code...
                    $path = $Store_Feed->img;
                    if (File::exists($path)) {
                        # code...
                        File::delete($path);
                    }
                }
                $image = $request->file('image');
                $extened = $image->getClientOriginalExtension();
                $image_name = time() . '.' . $extened;
                $image->move('uploads/feed/', $image_name);
                $Store_Feed->img = 'uploads/feed/' . $image_name;
                $Store_Feed->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Feed Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Plese Input Correct Info ',
                ]);
            }
        }
    }


    public function destroy($id)
    {

        $data = Feed::where('uuid', $id)->delete();

        if ($data) {
            return response()->json([
                'message' => ($data) ? 'Feed removed successfully.' : 'Feed removal failed.',
                'data'    => [],
                'errors'  => []
            ], ($data) ? Response::HTTP_ACCEPTED : Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function Restore($id)
    {
        $feed = Feed::find($id);
        if ($feed) {
            $feed->status = 0;
            $feed->save();
            return response()->json([
                'status' => 200,
                'message' => 'Feed Restored Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Try Again Later',
            ]);
        }
    }
}
