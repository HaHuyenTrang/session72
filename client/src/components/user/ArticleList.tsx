import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getList, updtaeList } from '../../store/articleLists/articleList';
import {RootState} from "../../store/store"
import './articleList.css'
// import { useHistory } from 'react-router-dom';
export default function ArticleList() {
    const list: any = useSelector((state: RootState) => state.articleList.list);
    const disPatch = useDispatch();

    useEffect(() => {
        disPatch(getList())
    }, [])
    console.log(1111,list);
    
    const handleUpdate=(item:any)=>{
        console.log(9090,item);
        let newValue = {...item, status: !item.status};
        disPatch(updtaeList(newValue))
    }


    //  const history = useHistory();

    // const handleAddArticle = () => {
    // // Thực hiện các logic liên quan đến việc thêm bài viết
    // history.push('/add-article');
//   }
    return (
        <div>ArticleList
            <div className='list'>
                <div>Danh sách bài viết</div>
                <div >Thêm mới bài viết</div>
            </div>
            <br />
            <div >
                <div  className='btnsearch'>
                    <button>sắp xếp tên</button>
                    <input type="text" placeholder='Tìm kiếm bài viết theo tên' />
                    <button><span className="material-symbols-outlined">autorenew</span></button>
                </div>
                <br />
                <table className='table' border={1}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tiêu đề</th>
                            <th>Hình ảnh</th>
                            <th>Thể loại</th>
                            <th>Ngày viết</th>
                            <th>trạng thái</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {list.map((item:any,index:any)=>{
                                return <tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td><img src={item.image} alt="" /></td>
                                    <td>{item.category}</td>
                                    <td>{item.date}</td>
                                    <td>{item.status ? 'ngừng sản xuất' : 'đã xuất bản' }</td>
                                    <td className='key-eye'>
                                        <button className='key' onClick={()=>handleUpdate(item)}><span className="material-symbols-outlined">encrypted</span></button>
                                        <button className='eye'><span className="material-symbols-outlined">visibility</span></button>
                                    </td>
                                </tr>
                            })}                       
                    </tbody>
                </table>
                <div className="footer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p>
                  Số lượng <i>{list.length}</i> bản ghi
                </p>

                <div style={{ display: "flex", gap: "20px" }}>
                  <select name="" id="">
                    <option value="">20 bản ghi trên 1 trang</option>
                    <option value="">30 bản ghi trên 1 trang</option>
                    <option value="">10 bản ghi trên 1 trang</option>
                  </select>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <button>Trước</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    {/* <p>....... </p> */}
                    <button>Sau</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}
