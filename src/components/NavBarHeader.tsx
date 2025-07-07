// src/components/NavBar.tsx

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import accountIcon from '../assets/account_icon.jpg';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// 検索バーのコンテナとなる div 要素をカスタムスタイルで定義
const Search = styled('div')(({ theme }) => ({
    position: 'relative',                // 親要素に対して相対位置を指定。子要素の絶対位置指定の基準になる
    borderRadius: theme.shape.borderRadius, // テーマで定義された角丸の半径を適用し、角を丸くする
    backgroundColor: alpha(theme.palette.common.white, 0.15), 
    // 背景色はテーマの共通の白色を透明度15%にした色を設定し、薄い白背景にする

    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        // ホバー時は背景の透明度を25%に上げて、少し濃く見えるように変化させる
    },

    marginRight: theme.spacing(2),    // 右の余白をテーマのスペーシング単位×2分だけ空ける
    marginLeft: '3%',                    // 左の余白はなし（0）
    width: '60%',                   // 幅は親要素に対して100%に広げる

    // 画面幅が 'sm'（スマホより大きいサイズ）以上のときのスタイル
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),  // 左側に余白をスペーシング単位×3分追加
        width: 'auto',                 // 幅は内容に応じて自動調整
    },
}));


// 検索アイコンを囲む div 要素のスタイル定義
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),  // 上下は0、左右にテーマのスペーシング単位×2の余白を設定
    height: '100%',                // 親要素（Searchコンテナ）の高さいっぱいに広げる
    position: 'absolute',          // 親の relative を基準に絶対配置にする（位置を固定）
    pointerEvents: 'none',         // この要素自体はマウスイベント（クリックなど）を受け取らない
    display: 'flex',               // フレックスボックスで内部のアイコンを中央揃えにする
    alignItems: 'center',          // 縦方向中央揃え
    justifyContent: 'center',      // 横方向中央揃え
}));


// MUIのInputBaseコンポーネントをカスタムスタイルで拡張したコンポーネント
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',  // テキストの色は親要素から継承（AppBarの色に合わせる）

    // InputBase内の実際の入力フィールド部分に適用されるスタイル
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),  
        // 上・右・下はテーマのスペーシング単位×1の余白、左は0（左側は検索アイコン分の余白を別で設定）

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,  
        // 左のパディングは、検索アイコンの幅（1em）+ テーマスペース4分を加算し、テキストがアイコンに被らないようにする

        transition: theme.transitions.create('width'),  
        // 入力フィールドの幅が変わる時のアニメーション効果（スムーズに幅が変わる）

        width: '100%',  
        // デフォルトは親要素いっぱいに幅を広げる

        [theme.breakpoints.up('md')]: {  
        width: '20ch',  
        // 画面幅が 'md'（ミディアムサイズ）以上の時は幅を文字数20文字分の幅に固定
        },
    },
}));




const HeaderNav: React.FC = () => {
  // メニューのアンカーポイント（表示位置）を管理するステート
  // anchorElは通常メニュー（プロフィールメニュー）の開閉制御用
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // mobileMoreAnchorElはモバイル用メニューの開閉制御用
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  // メニューが開いているかの判定
  const isMenuOpen = Boolean(anchorEl);
  // モバイルメニューが開いているかの判定
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // プロフィールメニューを開くためのイベントハンドラ
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // クリックされた要素をアンカーとして設定
  };

  // モバイルメニューを閉じる関数
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // 通常メニューを閉じる関数
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose(); // モバイルメニューも閉じる（重複して開かないように）
  };

  // モバイルメニューを開くためのイベントハンドラ
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget); // クリックされた要素をモバイルメニューのアンカーに設定
  };

  // 通常メニューのID（アクセシビリティ用）
  const menuId = 'primary-search-account-menu';
  // 通常メニューのレンダリング内容（プロフィール関連のメニュー）
  const renderMenu = (
    <Menu
      anchorEl={anchorEl} // メニューの表示位置を制御
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // メニューのアンカー起点位置
      id={menuId} // メニューのID
      keepMounted // メニューを非表示でもDOMから削除しない
      transformOrigin={{ vertical: 'top', horizontal: 'right' }} // メニューの開く基準点
      open={isMenuOpen} // メニューの開閉状態
      onClose={handleMenuClose} // メニューを閉じる関数
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem> {/* プロフィールメニュー項目 */}
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> {/* アカウント設定メニュー項目 */}
    </Menu>
  );

  // モバイルメニューのID
  const mobileMenuId = 'primary-search-account-menu-mobile';
  // モバイル表示用のメニュー内容
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl} // モバイルメニューの表示位置制御
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* カートのアイコン付きメニュー */}
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error"> {/* 新着4件のバッジ表示 */}
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Carts</p>
      </MenuItem>


      {/* プロフィールメニューの開閉ボタン */}
        <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
        >
            <img
            src={accountIcon}
            alt="account"
            style={{
                width: 32,
                height: 32,
                borderRadius: '50%', // 丸く表示（アイコン風）
                objectFit: 'cover',
            }}
            />
        </IconButton>
        <p>Profile</p>
        </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#CA709F' }}>  
            <Toolbar> {/* ツールバー：AppBar内の横並びコンテナ */}
            {/* タイトル表示。xs（スマホ）では非表示、sm以上で表示 */}
            <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'block', sm: 'block' } }}>
                Sanrio
            </Typography>

            {/* 検索バーコンポーネント */}
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>

            {/* 空のBoxで中央寄せ・余白確保（flexGrowで残りスペースを埋める） */}
            <Box sx={{ flexGrow: 1 }} />

            {/* PC表示用アイコン群。xs（スマホ）では非表示、md以上で表示 */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {/* メールアイコンとバッジ */}
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                </IconButton>

                {/* 通知アイコンとバッジ */}
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
                </IconButton>

                {/* プロフィールアイコン、クリックでメニュー開く */}
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId} // 通常メニューのID
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                <AccountCircle />
                </IconButton>
            </Box>

            {/* モバイル用の「…」メニューアイコン。md未満で表示 */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId} // モバイルメニューのID
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                <MoreIcon />
                </IconButton>
            </Box>
            </Toolbar>
        </AppBar>

        {/* モバイル用メニュー描画 */}
        {renderMobileMenu}
        {/* 通常メニュー描画 */}
        {renderMenu}
    </Box>
  );
};


export default HeaderNav;
