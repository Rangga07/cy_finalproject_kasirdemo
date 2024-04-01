module.exports = {
    locator_kategori : {
        btn_page_kategori : '//div[@class="chakra-stack css-owjkmg"]//a[@href="/categories"]',
        btn_tambah : '//a[text()="tambah"]',
        btn_simpan : '//button[text()="simpan"]',
        btn_aksi_index : '(//button[@class="chakra-button chakra-menu__menu-button css-pu8osu"])[1]',
        btn_confirm_delete : '//button[text()="Delete"]',
        input_nama : '//input[@id="nama"]',
        input_deskripsi : '//input[@id="deskripsi"]' 
    },
    locator_produk : {
        btn_page_produk : '//div[@class="chakra-stack css-owjkmg"]//a[@href="/products"]',
        btn_tambah : '//a[text()="tambah"]',
        btn_simpan : '//button[text()="simpan"]',
        btn_confirm_delete : '//button[text()="Delete"]',
        input_nama : '//input[@id="nama"]',
        input_deskripsi : '//input[@id="deskripsi"]',
        input_hargabeli : '//input[@id="harga beli"]',
        input_hargajual : '//input[@id="harga jual"]',
        input_stok : '//input[@id="stok"]',
        dropdown_kategori : '//input[@id="kategori"]',
        input_search : '//input[@placeholder="cari"]'
        
    },
    asserts : {
        assert_kategori : '//h2[@class="chakra-heading css-18j379d"]//a[@href="/categories"]', 
        assert_kategori_baru : '//h2[@class="chakra-heading css-18j379d" and contains(text(), "/ baru")]', 
        assert_kategori_ubah : '//h2[@class="chakra-heading css-18j379d" and contains(text(), "/ ubah")]',
        assert_create_kategori_popup : '//div[@class="css-njbp03"]//div[contains(text(),"item ditambahkan")]',
        assert_delete_kategori_popup : '(//div[@class="css-njbp03"]//div[contains(text(),"item dihapus")])[1]',
        assert_edit_kategori_popup : '(//div[@class="css-njbp03"]//div[contains(text(),"item diubah")])[1]',
        assert_produk : '//h2[@class="chakra-heading css-18j379d"]//a[@href="/products"]',
        assert_produk_baru : '//h2[@class="chakra-heading css-18j379d" and contains(text(), "/ baru")]',
        assert_kategori_dropdown : '//section[@class="chakra-modal__content css-dqn6fy"]/header[text()="kategori"]',
    }
}