import React from 'react'
import './articleList.css'
export default function AddList() {
  return (
    <div className='addList'>AddList
        <div className='list'>
                <div>Danh sách bài viết</div>
                <div>Thêm mới bài viết</div>
        </div>
        <br />
        <b>Tên bài viết</b>
        <br/>
        <br />
        <input type="text" />
        <br />
        <br />
        <b>Hình ảnh</b>
        <br />
        <br />
        <input type="text" />
        <br />
        <br />
        <b>Thể loại</b>
        <br />
        <br />
        <input type="text" />
        <br />
        <br />
        <b>Nội dung</b>
        <textarea
                name="content"
                id=""
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100px",
                }}
              ></textarea>
        <button>Xuất bản</button>
    </div>
  )
}
