import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {
  isEditing = false;
  profileImageUrl = 'https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?t=st=1724176795~exp=1724180395~hmac=84612ddeed2994f1a1e11e032ca9b7bb72f8a08d204ee3150ef8bf9732814e63&w=1380';
  profile = {
    fullName: 'Kevin Anderson',
    company: 'SoftoSol',
    job: 'Blog Designer',
    country: 'Pakistan',
    address: 'I-10/3 islamabad - Pakistan',
    phone: '+92300-0000000',
    email: 'andersonexamplegmail.com'
  };
  ngOnInit(): void {
    // Load saved profile data from localStorage
    const savedProfile = localStorage.getItem('profileData');
    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    }
    // Load saved profile image from localStorage
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      this.profileImageUrl = savedImage;
    }
  }
  ngAfterViewInit(): void {
    const editImageBtn = document.getElementById('editImageBtn') as HTMLButtonElement;
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (editImageBtn && fileInput) {
      editImageBtn.addEventListener('click', () => {
        fileInput.click();
      });
      fileInput.addEventListener('change', (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageUrl = e.target?.result as string;
            this.profileImageUrl = imageUrl;
            localStorage.setItem('profileImage', imageUrl);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }
  saveProfile() {
    // Save all profile details to localStorage
    localStorage.setItem('profileData', JSON.stringify(this.profile));
    this.isEditing = false;
  }
  cancelEditing() {
    this.isEditing = false;
  }

}
