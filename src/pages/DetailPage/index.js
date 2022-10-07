import styles from 'styles.module.css'

export default function DetailPage()
{


    return(
        <div className={styles.container}>
            <table>
                <caption>Chi tiết</caption>
                <thead>
                    <tr>Hình</tr>
                    <tr>Tên</tr>
                    <tr>Giá</tr>
                    <tr>Số Lượng</tr>
                    <tr>Tổng tiền</tr>
                    <tr>Trước thuế</tr>
                    <tr>Tổng tiền thuế</tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}