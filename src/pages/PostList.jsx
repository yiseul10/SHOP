import React, {useState, useEffect} from 'react';
import CommonTable from '../components/Table/CommonTable';
import CommonTableColumn from '../components/Table/CommonTableColumn';
import CommonTableRow from '../components/Table/CommonTableRow'; 
import { postList } from 'components/Table/Data';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.div`
  color: gray;
  text-align: center;
  padding: 10rem
`;



const PostList = props => {
 
    const [ dataList, setDataList ] = useState([]);
 
  useEffect(() => {
    setDataList(postList);
  }, [ ])

              
    return (
        <>
              <br/>
              <br/>
              <br/>
              <Wrapper>
              <h1>  공지사항 </h1>
              <hr/>
        <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
          {
            dataList ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{ item.no }</CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`/Customer/cs/CustomerCenter/custom/NOTICE/${item.no}`}>{ item.title }</Link>
                  </CommonTableColumn>
                  <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                  <CommonTableColumn>{ item.readCount }</CommonTableColumn>
                </CommonTableRow>
              )
            }) : ''
          }
        </CommonTable>

        </Wrapper>
        <br/>
        <br/>
        <br/>

      </>
  )
}
 
export default PostList;