// Generated code, do not edit
import ko = require('knockout');
import helper = require('bower_components/folke-ko-service-helpers/folke-ko-service-helpers');
import validator = require('bower_components/folke-ko-validation/folke-ko-validation');

export var loading = helper.loading;

export class ExternalLinkView {
	originalData: ExternalLinkViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	title: KnockoutObservable<string> = ko.observable<string>();
	url: KnockoutObservable<string> = ko.observable<string>();

	constructor(data?:ExternalLinkViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.title() !== this.originalData.title
			|| this.url() !== this.originalData.url
		);
	}

	public toJs() {
		return {
			id: this.id,
			title: this.title(),
			url: this.url()
		}
	}

	public load(data:ExternalLinkViewData) {
		this.id = data.id;
		this.title(data.title);
		this.url(data.url);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface ExternalLinkViewData {
	id?: number;
	title?: string;
	url?: string;
}

export class LoginResultView {
	originalData: LoginResultViewData;
	changed: KnockoutComputed<boolean>;

	status: KnockoutObservable<LoginStatusEnum> = ko.observable<LoginStatusEnum>();
	rememberMe: KnockoutObservable<boolean> = ko.observable<boolean>();

	constructor(data?:LoginResultViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.status() !== this.originalData.status
			|| this.rememberMe() !== this.originalData.rememberMe
		);
	}

	public toJs() {
		return {
			status: this.status(),
			rememberMe: this.rememberMe()
		}
	}

	public load(data:LoginResultViewData) {
		this.status(data.status);
		this.rememberMe(data.rememberMe);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface LoginResultViewData {
	status?: LoginStatusEnum;
	rememberMe?: boolean;
}

export class LoginView {
	originalData: LoginViewData;
	changed: KnockoutComputed<boolean>;

	email: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isEmail).addValidator(validator.isRequired);
	password: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired);
	rememberMe: KnockoutObservable<boolean> = ko.observable<boolean>();

	constructor(data?:LoginViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.email() !== this.originalData.email
			|| this.password() !== this.originalData.password
			|| this.rememberMe() !== this.originalData.rememberMe
		);
	}

	public toJs() {
		return {
			email: this.email(),
			password: this.password(),
			rememberMe: this.rememberMe()
		}
	}

	public load(data:LoginViewData) {
		this.email(data.email);
		this.password(data.password);
		this.rememberMe(data.rememberMe);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.email.validating() && this.email.errorMessage() == null && !this.password.validating() && this.password.errorMessage() == null;
	});
}

export interface LoginViewData {
	email?: string;
	password?: string;
	rememberMe?: boolean;
}

export class VerifyCodeView {
	originalData: VerifyCodeViewData;
	changed: KnockoutComputed<boolean>;

	provider: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired);
	code: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired);
	rememberBrowser: KnockoutObservable<boolean> = ko.observable<boolean>();
	rememberMe: KnockoutObservable<boolean> = ko.observable<boolean>();

	constructor(data?:VerifyCodeViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.provider() !== this.originalData.provider
			|| this.code() !== this.originalData.code
			|| this.rememberBrowser() !== this.originalData.rememberBrowser
			|| this.rememberMe() !== this.originalData.rememberMe
		);
	}

	public toJs() {
		return {
			provider: this.provider(),
			code: this.code(),
			rememberBrowser: this.rememberBrowser(),
			rememberMe: this.rememberMe()
		}
	}

	public load(data:VerifyCodeViewData) {
		this.provider(data.provider);
		this.code(data.code);
		this.rememberBrowser(data.rememberBrowser);
		this.rememberMe(data.rememberMe);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.provider.validating() && this.provider.errorMessage() == null && !this.code.validating() && this.code.errorMessage() == null;
	});
}

export interface VerifyCodeViewData {
	provider?: string;
	code?: string;
	rememberBrowser?: boolean;
	rememberMe?: boolean;
}

export class AccountViewModel {
	originalData: AccountViewModelData;
	changed: KnockoutComputed<boolean>;

	userName: KnockoutObservable<string> = ko.observable<string>();
	logged: KnockoutObservable<boolean> = ko.observable<boolean>();
	emailConfirmed: KnockoutObservable<boolean> = ko.observable<boolean>();
	email: KnockoutObservable<string> = ko.observable<string>();
	id: number;
	hasPassword: KnockoutObservable<boolean> = ko.observable<boolean>();

	constructor(data?:AccountViewModelData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.userName() !== this.originalData.userName
			|| this.logged() !== this.originalData.logged
			|| this.emailConfirmed() !== this.originalData.emailConfirmed
			|| this.email() !== this.originalData.email
			|| this.hasPassword() !== this.originalData.hasPassword
		);
	}

	public toJs() {
		return {
			userName: this.userName(),
			logged: this.logged(),
			emailConfirmed: this.emailConfirmed(),
			email: this.email(),
			id: this.id,
			hasPassword: this.hasPassword()
		}
	}

	public load(data:AccountViewModelData) {
		this.userName(data.userName);
		this.logged(data.logged);
		this.emailConfirmed(data.emailConfirmed);
		this.email(data.email);
		this.id = data.id;
		this.hasPassword(data.hasPassword);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface AccountViewModelData {
	userName?: string;
	logged?: boolean;
	emailConfirmed?: boolean;
	email?: string;
	id?: number;
	hasPassword?: boolean;
}

export class RegisterView {
	originalData: RegisterViewData;
	changed: KnockoutComputed<boolean>;

	email: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isEmail).addValidator(validator.isRequired);
	password: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired).addValidator(validator.hasMinLength(4));
	confirmPassword: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.areSame(this.password));

	constructor(data?:RegisterViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.email() !== this.originalData.email
			|| this.password() !== this.originalData.password
			|| this.confirmPassword() !== this.originalData.confirmPassword
		);
	}

	public toJs() {
		return {
			email: this.email(),
			password: this.password(),
			confirmPassword: this.confirmPassword()
		}
	}

	public load(data:RegisterViewData) {
		this.email(data.email);
		this.password(data.password);
		this.confirmPassword(data.confirmPassword);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.email.validating() && this.email.errorMessage() == null && !this.password.validating() && this.password.errorMessage() == null && !this.confirmPassword.validating() && this.confirmPassword.errorMessage() == null;
	});
}

export interface RegisterViewData {
	email?: string;
	password?: string;
	confirmPassword?: string;
}

export class ForgotPasswordView {
	originalData: ForgotPasswordViewData;
	changed: KnockoutComputed<boolean>;

	email: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isEmail).addValidator(validator.isRequired);

	constructor(data?:ForgotPasswordViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.email() !== this.originalData.email
		);
	}

	public toJs() {
		return {
			email: this.email()
		}
	}

	public load(data:ForgotPasswordViewData) {
		this.email(data.email);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.email.validating() && this.email.errorMessage() == null;
	});
}

export interface ForgotPasswordViewData {
	email?: string;
}

export class ResetPasswordView {
	originalData: ResetPasswordViewData;
	changed: KnockoutComputed<boolean>;

	email: KnockoutObservable<string> = ko.observable<string>();
	userId: KnockoutObservable<string> = ko.observable<string>();
	password: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired).addValidator(validator.hasMinLength(6));
	confirmPassword: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.areSame(this.password));
	code: KnockoutObservable<string> = ko.observable<string>();

	constructor(data?:ResetPasswordViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.email() !== this.originalData.email
			|| this.userId() !== this.originalData.userId
			|| this.password() !== this.originalData.password
			|| this.confirmPassword() !== this.originalData.confirmPassword
			|| this.code() !== this.originalData.code
		);
	}

	public toJs() {
		return {
			email: this.email(),
			userId: this.userId(),
			password: this.password(),
			confirmPassword: this.confirmPassword(),
			code: this.code()
		}
	}

	public load(data:ResetPasswordViewData) {
		this.email(data.email);
		this.userId(data.userId);
		this.password(data.password);
		this.confirmPassword(data.confirmPassword);
		this.code(data.code);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.password.validating() && this.password.errorMessage() == null && !this.confirmPassword.validating() && this.confirmPassword.errorMessage() == null;
	});
}

export interface ResetPasswordViewData {
	email?: string;
	userId?: string;
	password?: string;
	confirmPassword?: string;
	code?: string;
}

export class SendCodeView {
	originalData: SendCodeViewData;
	changed: KnockoutComputed<boolean>;

	selectedProvider: KnockoutObservable<string> = ko.observable<string>();
	providers: KnockoutObservableArray<string> = ko.observableArray<string>();
	rememberMe: KnockoutObservable<boolean> = ko.observable<boolean>();

	constructor(data?:SendCodeViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.selectedProvider() !== this.originalData.selectedProvider
			|| helper.hasArrayChanged(this.providers, this.originalData.providers)			|| this.rememberMe() !== this.originalData.rememberMe
		);
	}

	public toJs() {
		return {
			selectedProvider: this.selectedProvider(),
			providers: this.providers(),
			rememberMe: this.rememberMe()
		}
	}

	public load(data:SendCodeViewData) {
		this.selectedProvider(data.selectedProvider);
		this.providers(data['providers'] ? (<any[]>data.providers).map(value => value) : null);
		this.rememberMe(data.rememberMe);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface SendCodeViewData {
	selectedProvider?: string;
	providers?: string[];
	rememberMe?: boolean;
}

export class AuthenticationDescription {
	originalData: AuthenticationDescriptionData;
	changed: KnockoutComputed<boolean>;

	items: {[key:string]:any};
	authenticationScheme: KnockoutObservable<string> = ko.observable<string>();
	displayName: KnockoutObservable<string> = ko.observable<string>();

	constructor(data?:AuthenticationDescriptionData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.authenticationScheme() !== this.originalData.authenticationScheme
			|| this.displayName() !== this.originalData.displayName
		);
	}

	public toJs() {
		return {
			items: this.items,
			authenticationScheme: this.authenticationScheme(),
			displayName: this.displayName()
		}
	}

	public load(data:AuthenticationDescriptionData) {
		this.items = data.items;
		this.authenticationScheme(data.authenticationScheme);
		this.displayName(data.displayName);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface AuthenticationDescriptionData {
	items?: {[key:string]:any};
	authenticationScheme?: string;
	displayName?: string;
}

export class UserLoginInfo {
	originalData: UserLoginInfoData;
	changed: KnockoutComputed<boolean>;

	loginProvider: KnockoutObservable<string> = ko.observable<string>();
	providerKey: KnockoutObservable<string> = ko.observable<string>();
	providerDisplayName: KnockoutObservable<string> = ko.observable<string>();

	constructor(data?:UserLoginInfoData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.loginProvider() !== this.originalData.loginProvider
			|| this.providerKey() !== this.originalData.providerKey
			|| this.providerDisplayName() !== this.originalData.providerDisplayName
		);
	}

	public toJs() {
		return {
			loginProvider: this.loginProvider(),
			providerKey: this.providerKey(),
			providerDisplayName: this.providerDisplayName()
		}
	}

	public load(data:UserLoginInfoData) {
		this.loginProvider(data.loginProvider);
		this.providerKey(data.providerKey);
		this.providerDisplayName(data.providerDisplayName);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface UserLoginInfoData {
	loginProvider?: string;
	providerKey?: string;
	providerDisplayName?: string;
}

export class RoleViewModel {
	originalData: RoleViewModelData;
	changed: KnockoutComputed<boolean>;

	name: KnockoutObservable<string> = ko.observable<string>();
	id: number;

	constructor(data?:RoleViewModelData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.name() !== this.originalData.name
		);
	}

	public toJs() {
		return {
			name: this.name(),
			id: this.id
		}
	}

	public load(data:RoleViewModelData) {
		this.name(data.name);
		this.id = data.id;
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface RoleViewModelData {
	name?: string;
	id?: number;
}

export class ChangePasswordView {
	originalData: ChangePasswordViewData;
	changed: KnockoutComputed<boolean>;

	oldPassword: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired);
	newPassword: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired);
	confirmPassword: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired).addValidator(validator.areSame(this.newPassword));

	constructor(data?:ChangePasswordViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.oldPassword() !== this.originalData.oldPassword
			|| this.newPassword() !== this.originalData.newPassword
			|| this.confirmPassword() !== this.originalData.confirmPassword
		);
	}

	public toJs() {
		return {
			oldPassword: this.oldPassword(),
			newPassword: this.newPassword(),
			confirmPassword: this.confirmPassword()
		}
	}

	public load(data:ChangePasswordViewData) {
		this.oldPassword(data.oldPassword);
		this.newPassword(data.newPassword);
		this.confirmPassword(data.confirmPassword);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.oldPassword.validating() && this.oldPassword.errorMessage() == null && !this.newPassword.validating() && this.newPassword.errorMessage() == null && !this.confirmPassword.validating() && this.confirmPassword.errorMessage() == null;
	});
}

export interface ChangePasswordViewData {
	oldPassword?: string;
	newPassword?: string;
	confirmPassword?: string;
}

export class SetPasswordView {
	originalData: SetPasswordViewData;
	changed: KnockoutComputed<boolean>;

	newPassword: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired).addValidator(validator.hasMinLength(6));
	confirmPassword: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.areSame(this.newPassword));

	constructor(data?:SetPasswordViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.newPassword() !== this.originalData.newPassword
			|| this.confirmPassword() !== this.originalData.confirmPassword
		);
	}

	public toJs() {
		return {
			newPassword: this.newPassword(),
			confirmPassword: this.confirmPassword()
		}
	}

	public load(data:SetPasswordViewData) {
		this.newPassword(data.newPassword);
		this.confirmPassword(data.confirmPassword);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.newPassword.validating() && this.newPassword.errorMessage() == null && !this.confirmPassword.validating() && this.confirmPassword.errorMessage() == null;
	});
}

export interface SetPasswordViewData {
	newPassword?: string;
	confirmPassword?: string;
}

export class SetEmailView {
	originalData: SetEmailViewData;
	changed: KnockoutComputed<boolean>;

	email: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isEmail).addValidator(validator.isRequired);

	constructor(data?:SetEmailViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.email() !== this.originalData.email
		);
	}

	public toJs() {
		return {
			email: this.email()
		}
	}

	public load(data:SetEmailViewData) {
		this.email(data.email);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.email.validating() && this.email.errorMessage() == null;
	});
}

export interface SetEmailViewData {
	email?: string;
}

export class UserSearchFilter {
	originalData: UserSearchFilterData;
	changed: KnockoutComputed<boolean>;

	name: KnockoutObservable<string> = ko.observable<string>();

	constructor(data?:UserSearchFilterData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.name() !== this.originalData.name
		);
	}

	public toJs() {
		return {
			name: this.name()
		}
	}

	public load(data:UserSearchFilterData) {
		this.name(data.name);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface UserSearchFilterData {
	name?: string;
}

export class ChatView {
	originalData: ChatViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	author: KnockoutObservable<AccountViewModel> = ko.observable<AccountViewModel>();
	text: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired);
	creationDate: KnockoutObservable<Date> = ko.observable<Date>();

	constructor(data?:ChatViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			helper.hasObjectChanged(this.author(), this.originalData.author)
			|| this.text() !== this.originalData.text
			|| helper.hasDateChanged(this.creationDate(), this.originalData.creationDate)
		);
	}

	public toJs() {
		return {
			id: this.id,
			author: this.author() ? this.author().toJs() : null,
			text: this.text(),
			creationDate: this.creationDate()
		}
	}

	public load(data:ChatViewData) {
		this.id = data.id;
		this.author(data.author ? new AccountViewModel(data.author) : null);
		this.text(data.text);
		this.creationDate(data.creationDate ? new Date(data.creationDate) : null);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.text.validating() && this.text.errorMessage() == null;
	});
}

export interface ChatViewData {
	id?: number;
	author?: AccountViewModelData;
	text?: string;
	creationDate?: string;
}

export class CommentView {
	originalData: CommentViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	author: KnockoutObservable<AccountViewModel> = ko.observable<AccountViewModel>();
	text: KnockoutObservable<string> = ko.observable<string>();
	creationDate: KnockoutObservable<Date> = ko.observable<Date>();

	constructor(data?:CommentViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			helper.hasObjectChanged(this.author(), this.originalData.author)
			|| this.text() !== this.originalData.text
			|| helper.hasDateChanged(this.creationDate(), this.originalData.creationDate)
		);
	}

	public toJs() {
		return {
			id: this.id,
			author: this.author() ? this.author().toJs() : null,
			text: this.text(),
			creationDate: this.creationDate()
		}
	}

	public load(data:CommentViewData) {
		this.id = data.id;
		this.author(data.author ? new AccountViewModel(data.author) : null);
		this.text(data.text);
		this.creationDate(data.creationDate ? new Date(data.creationDate) : null);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface CommentViewData {
	id?: number;
	author?: AccountViewModelData;
	text?: string;
	creationDate?: string;
}

export class ForumView {
	originalData: ForumViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	name: KnockoutObservable<string> = ko.observable<string>();
	writeRole: KnockoutObservable<string> = ko.observable<string>();
	readRole: KnockoutObservable<string> = ko.observable<string>();
	numberOfNewMessages: KnockoutObservable<number> = ko.observable<number>();

	constructor(data?:ForumViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.name() !== this.originalData.name
			|| this.writeRole() !== this.originalData.writeRole
			|| this.readRole() !== this.originalData.readRole
			|| this.numberOfNewMessages() !== this.originalData.numberOfNewMessages
		);
	}

	public toJs() {
		return {
			id: this.id,
			name: this.name(),
			writeRole: this.writeRole(),
			readRole: this.readRole(),
			numberOfNewMessages: this.numberOfNewMessages()
		}
	}

	public load(data:ForumViewData) {
		this.id = data.id;
		this.name(data.name);
		this.writeRole(data.writeRole);
		this.readRole(data.readRole);
		this.numberOfNewMessages(data.numberOfNewMessages);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface ForumViewData {
	id?: number;
	name?: string;
	writeRole?: string;
	readRole?: string;
	numberOfNewMessages?: number;
}

export class PhotoView {
	originalData: PhotoViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	fileUrl: KnockoutObservable<string> = ko.observable<string>();
	width: KnockoutObservable<number> = ko.observable<number>();
	height: KnockoutObservable<number> = ko.observable<number>();

	constructor(data?:PhotoViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.fileUrl() !== this.originalData.fileUrl
			|| this.width() !== this.originalData.width
			|| this.height() !== this.originalData.height
		);
	}

	public toJs() {
		return {
			id: this.id,
			fileUrl: this.fileUrl(),
			width: this.width(),
			height: this.height()
		}
	}

	public load(data:PhotoViewData) {
		this.id = data.id;
		this.fileUrl(data.fileUrl);
		this.width(data.width);
		this.height(data.height);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface PhotoViewData {
	id?: number;
	fileUrl?: string;
	width?: number;
	height?: number;
}

export class PrivateMessageView {
	originalData: PrivateMessageViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	creationDate: KnockoutObservable<Date> = ko.observable<Date>();
	author: KnockoutObservable<AccountViewModel> = ko.observable<AccountViewModel>();
	title: KnockoutObservable<string> = ko.observable<string>();
	text: KnockoutObservable<string> = ko.observable<string>();
	accountRecipients: KnockoutObservableArray<AccountViewModel> = ko.observableArray<AccountViewModel>();

	constructor(data?:PrivateMessageViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			helper.hasDateChanged(this.creationDate(), this.originalData.creationDate)
			|| helper.hasObjectChanged(this.author(), this.originalData.author)
			|| this.title() !== this.originalData.title
			|| this.text() !== this.originalData.text
			|| helper.hasArrayOfObjectsChanged(this.accountRecipients, this.originalData.accountRecipients)		);
	}

	public toJs() {
		return {
			id: this.id,
			creationDate: this.creationDate(),
			author: this.author() ? this.author().toJs() : null,
			title: this.title(),
			text: this.text(),
			accountRecipients: this.accountRecipients() != null ? this.accountRecipients().map(v => v.toJs()) : null
		}
	}

	public load(data:PrivateMessageViewData) {
		this.id = data.id;
		this.creationDate(data.creationDate ? new Date(data.creationDate) : null);
		this.author(data.author ? new AccountViewModel(data.author) : null);
		this.title(data.title);
		this.text(data.text);
		this.accountRecipients(data['accountRecipients'] ? (<any[]>data.accountRecipients).map(value => new AccountViewModel(value)) : null);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface PrivateMessageViewData {
	id?: number;
	creationDate?: string;
	author?: AccountViewModelData;
	title?: string;
	text?: string;
	accountRecipients?: AccountViewModelData[];
}

export class ThreadView {
	originalData: ThreadViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	creationDate: KnockoutObservable<Date> = ko.observable<Date>();
	author: KnockoutObservable<AccountViewModel> = ko.observable<AccountViewModel>();
	title: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired).addValidator(validator.hasMinLength(3));
	text: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired).addValidator(validator.hasMinLength(3));
	sticky: KnockoutObservable<boolean> = ko.observable<boolean>();
	numberOfComments: KnockoutObservable<number> = ko.observable<number>();
	numberOfViewedComments: KnockoutObservable<number> = ko.observable<number>();
	lastViewedId: KnockoutObservable<number> = ko.observable<number>();

	constructor(data?:ThreadViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			helper.hasDateChanged(this.creationDate(), this.originalData.creationDate)
			|| helper.hasObjectChanged(this.author(), this.originalData.author)
			|| this.title() !== this.originalData.title
			|| this.text() !== this.originalData.text
			|| this.sticky() !== this.originalData.sticky
			|| this.numberOfComments() !== this.originalData.numberOfComments
			|| this.numberOfViewedComments() !== this.originalData.numberOfViewedComments
			|| this.lastViewedId() !== this.originalData.lastViewedId
		);
	}

	public toJs() {
		return {
			id: this.id,
			creationDate: this.creationDate(),
			author: this.author() ? this.author().toJs() : null,
			title: this.title(),
			text: this.text(),
			sticky: this.sticky(),
			numberOfComments: this.numberOfComments(),
			numberOfViewedComments: this.numberOfViewedComments(),
			lastViewedId: this.lastViewedId()
		}
	}

	public load(data:ThreadViewData) {
		this.id = data.id;
		this.creationDate(data.creationDate ? new Date(data.creationDate) : null);
		this.author(data.author ? new AccountViewModel(data.author) : null);
		this.title(data.title);
		this.text(data.text);
		this.sticky(data.sticky);
		this.numberOfComments(data.numberOfComments);
		this.numberOfViewedComments(data.numberOfViewedComments);
		this.lastViewedId(data.lastViewedId);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.title.validating() && this.title.errorMessage() == null && !this.text.validating() && this.text.errorMessage() == null;
	});
}

export interface ThreadViewData {
	id?: number;
	creationDate?: string;
	author?: AccountViewModelData;
	title?: string;
	text?: string;
	sticky?: boolean;
	numberOfComments?: number;
	numberOfViewedComments?: number;
	lastViewedId?: number;
}

export class ThreadFullView {
	originalData: ThreadFullViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	creationDate: KnockoutObservable<Date> = ko.observable<Date>();
	author: KnockoutObservable<AccountViewModel> = ko.observable<AccountViewModel>();
	title: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired).addValidator(validator.hasMinLength(3));
	text: validator.ValidableObservable<string> = validator.validableObservable<string>().addValidator(validator.isRequired).addValidator(validator.hasMinLength(3));
	sticky: KnockoutObservable<boolean> = ko.observable<boolean>();
	numberOfComments: KnockoutObservable<number> = ko.observable<number>();
	numberOfViewedComments: KnockoutObservable<number> = ko.observable<number>();
	lastViewedId: KnockoutObservable<number> = ko.observable<number>();
	photos: KnockoutObservableArray<PhotoView> = ko.observableArray<PhotoView>();

	constructor(data?:ThreadFullViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			helper.hasDateChanged(this.creationDate(), this.originalData.creationDate)
			|| helper.hasObjectChanged(this.author(), this.originalData.author)
			|| this.title() !== this.originalData.title
			|| this.text() !== this.originalData.text
			|| this.sticky() !== this.originalData.sticky
			|| this.numberOfComments() !== this.originalData.numberOfComments
			|| this.numberOfViewedComments() !== this.originalData.numberOfViewedComments
			|| this.lastViewedId() !== this.originalData.lastViewedId
			|| helper.hasArrayOfObjectsChanged(this.photos, this.originalData.photos)		);
	}

	public toJs() {
		return {
			id: this.id,
			creationDate: this.creationDate(),
			author: this.author() ? this.author().toJs() : null,
			title: this.title(),
			text: this.text(),
			sticky: this.sticky(),
			numberOfComments: this.numberOfComments(),
			numberOfViewedComments: this.numberOfViewedComments(),
			lastViewedId: this.lastViewedId(),
			photos: this.photos() != null ? this.photos().map(v => v.toJs()) : null
		}
	}

	public load(data:ThreadFullViewData) {
		this.id = data.id;
		this.creationDate(data.creationDate ? new Date(data.creationDate) : null);
		this.author(data.author ? new AccountViewModel(data.author) : null);
		this.title(data.title);
		this.text(data.text);
		this.sticky(data.sticky);
		this.numberOfComments(data.numberOfComments);
		this.numberOfViewedComments(data.numberOfViewedComments);
		this.lastViewedId(data.lastViewedId);
		this.photos(data['photos'] ? (<any[]>data.photos).map(value => new PhotoView(value)) : null);
	}

	public reset() {
		this.load(this.originalData);
	}

	public isValid = ko.computed(() => {
		return !loading()  && !this.title.validating() && this.title.errorMessage() == null && !this.text.validating() && this.text.errorMessage() == null;
	});
}

export interface ThreadFullViewData {
	id?: number;
	creationDate?: string;
	author?: AccountViewModelData;
	title?: string;
	text?: string;
	sticky?: boolean;
	numberOfComments?: number;
	numberOfViewedComments?: number;
	lastViewedId?: number;
	photos?: PhotoViewData[];
}

export class PollChosenAnswerView {
	originalData: PollChosenAnswerViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	answer: KnockoutObservable<PollPossibleAnswerView> = ko.observable<PollPossibleAnswerView>();
	account: KnockoutObservable<AccountViewModel> = ko.observable<AccountViewModel>();

	constructor(data?:PollChosenAnswerViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			helper.hasObjectChanged(this.answer(), this.originalData.answer)
			|| helper.hasObjectChanged(this.account(), this.originalData.account)
		);
	}

	public toJs() {
		return {
			id: this.id,
			answer: this.answer() ? this.answer().toJs() : null,
			account: this.account() ? this.account().toJs() : null
		}
	}

	public load(data:PollChosenAnswerViewData) {
		this.id = data.id;
		this.answer(data.answer ? new PollPossibleAnswerView(data.answer) : null);
		this.account(data.account ? new AccountViewModel(data.account) : null);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface PollChosenAnswerViewData {
	id?: number;
	answer?: PollPossibleAnswerViewData;
	account?: AccountViewModelData;
}

export class PollPossibleAnswerView {
	originalData: PollPossibleAnswerViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	text: KnockoutObservable<string> = ko.observable<string>();
	count: KnockoutObservable<number> = ko.observable<number>();

	constructor(data?:PollPossibleAnswerViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			this.text() !== this.originalData.text
			|| this.count() !== this.originalData.count
		);
	}

	public toJs() {
		return {
			id: this.id,
			text: this.text(),
			count: this.count()
		}
	}

	public load(data:PollPossibleAnswerViewData) {
		this.id = data.id;
		this.text(data.text);
		this.count(data.count);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface PollPossibleAnswerViewData {
	id?: number;
	text?: string;
	count?: number;
}

export class PollView {
	originalData: PollViewData;
	changed: KnockoutComputed<boolean>;

	id: number;
	author: KnockoutObservable<AccountViewModel> = ko.observable<AccountViewModel>();
	question: KnockoutObservable<string> = ko.observable<string>();
	possibleAnswers: KnockoutObservableArray<PollPossibleAnswerView> = ko.observableArray<PollPossibleAnswerView>();
	openDate: KnockoutObservable<Date> = ko.observable<Date>();
	closeDate: KnockoutObservable<Date> = ko.observable<Date>();

	constructor(data?:PollViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			helper.hasObjectChanged(this.author(), this.originalData.author)
			|| this.question() !== this.originalData.question
			|| helper.hasArrayOfObjectsChanged(this.possibleAnswers, this.originalData.possibleAnswers)			|| helper.hasDateChanged(this.openDate(), this.originalData.openDate)
			|| helper.hasDateChanged(this.closeDate(), this.originalData.closeDate)
		);
	}

	public toJs() {
		return {
			id: this.id,
			author: this.author() ? this.author().toJs() : null,
			question: this.question(),
			possibleAnswers: this.possibleAnswers() != null ? this.possibleAnswers().map(v => v.toJs()) : null,
			openDate: this.openDate(),
			closeDate: this.closeDate()
		}
	}

	public load(data:PollViewData) {
		this.id = data.id;
		this.author(data.author ? new AccountViewModel(data.author) : null);
		this.question(data.question);
		this.possibleAnswers(data['possibleAnswers'] ? (<any[]>data.possibleAnswers).map(value => new PollPossibleAnswerView(value)) : null);
		this.openDate(data.openDate ? new Date(data.openDate) : null);
		this.closeDate(data.closeDate ? new Date(data.closeDate) : null);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface PollViewData {
	id?: number;
	author?: AccountViewModelData;
	question?: string;
	possibleAnswers?: PollPossibleAnswerViewData[];
	openDate?: string;
	closeDate?: string;
}

export class PollAndVoteView {
	originalData: PollAndVoteViewData;
	changed: KnockoutComputed<boolean>;

	answer: KnockoutObservable<PollChosenAnswerView> = ko.observable<PollChosenAnswerView>();
	poll: KnockoutObservable<PollView> = ko.observable<PollView>();

	constructor(data?:PollAndVoteViewData) {
		this.originalData = data = data || {};
		this.load(data);
		this.changed = ko.computed(() => 
			helper.hasObjectChanged(this.answer(), this.originalData.answer)
			|| helper.hasObjectChanged(this.poll(), this.originalData.poll)
		);
	}

	public toJs() {
		return {
			answer: this.answer() ? this.answer().toJs() : null,
			poll: this.poll() ? this.poll().toJs() : null
		}
	}

	public load(data:PollAndVoteViewData) {
		this.answer(data.answer ? new PollChosenAnswerView(data.answer) : null);
		this.poll(data.poll ? new PollView(data.poll) : null);
	}

	public reset() {
		this.load(this.originalData);
	}
}

export interface PollAndVoteViewData {
	answer?: PollChosenAnswerViewData;
	poll?: PollViewData;
}

export enum LoginStatusEnum {
	Success,
	LockedOut,
	RequiresVerification
}


export class TagController {
	public complete(parameters:{query:string}) {
		return helper.fetchList<string>('/api/tag/' + helper.getQueryString({query: parameters.query}), 'GET', null);
	}
}

export var tag = new TagController();

export class ExternalLinkController {
	public getAllT<T extends ExternalLinkView>(factory: (data:ExternalLinkViewData ) => T, parameters:{}) {
		return helper.fetchListT('/api/external-link/', 'GET', factory, null);
	}

	public getAll = (parameters:{}) => {
		return this.getAllT(data => new ExternalLinkView(data), parameters);
	}

	public getT<T extends ExternalLinkView>(factory: (data:ExternalLinkViewData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/external-link/' + parameters.id + '', 'GET', factory, null);
	}

	public get = (parameters:{id:number}) => {
		return this.getT(data => new ExternalLinkView(data), parameters);
	}

	public postT<T extends ExternalLinkView>(factory: (data:ExternalLinkViewData ) => T, parameters:{value:ExternalLinkView}) {
		return helper.fetchSingleT('/api/external-link/', 'POST', factory, JSON.stringify(parameters.value.toJs()));
	}

	public post = (parameters:{value:ExternalLinkView}) => {
		return this.postT(data => new ExternalLinkView(data), parameters);
	}

	public put(parameters:{id:number; value:ExternalLinkView}) {
		return helper.fetchVoid('/api/external-link/' + parameters.id + '', 'PUT', JSON.stringify(parameters.value.toJs()));
	}

	public delete(parameters:{id:number}) {
		return helper.fetchVoid('/api/external-link/' + parameters.id + '', 'DELETE', null);
	}
}

export var externalLink = new ExternalLinkController();

export class AuthenticationController {
	public loginT<T extends LoginResultView>(factory: (data:LoginResultViewData ) => T, parameters:{loginView:LoginView}) {
		return helper.fetchSingleT('/api/authentication/login', 'PUT', factory, JSON.stringify(parameters.loginView.toJs()));
	}

	public login = (parameters:{loginView:LoginView}) => {
		return this.loginT(data => new LoginResultView(data), parameters);
	}

	public verifyCode(parameters:{verifyCodeView:VerifyCodeView}) {
		return helper.fetchVoid('/api/authentication/verifycode', 'PUT', JSON.stringify(parameters.verifyCodeView.toJs()));
	}

	public registerT<T extends AccountViewModel>(factory: (data:AccountViewModelData ) => T, parameters:{registerView:RegisterView}) {
		return helper.fetchSingleT('/api/authentication/register', 'POST', factory, JSON.stringify(parameters.registerView.toJs()));
	}

	public register = (parameters:{registerView:RegisterView}) => {
		return this.registerT(data => new AccountViewModel(data), parameters);
	}

	public sendAccountConfirm(parameters:{userId:number}) {
		return helper.fetchVoid('/api/authentication/send-account-confirm' + helper.getQueryString({userId: parameters.userId}), 'PUT', null);
	}

	public confirmEmail(parameters:{userId:number; code:string}) {
		return helper.fetchVoid('/api/authentication/confirm-email' + helper.getQueryString({userId: parameters.userId, code: parameters.code}), 'PUT', null);
	}

	public forgotPassword(parameters:{forgotPasswordView:ForgotPasswordView}) {
		return helper.fetchVoid('/api/authentication/forgot-password', 'PUT', JSON.stringify(parameters.forgotPasswordView.toJs()));
	}

	public resetPassword(parameters:{resetPasswordView:ResetPasswordView}) {
		return helper.fetchVoid('/api/authentication/reset-password', 'PUT', JSON.stringify(parameters.resetPasswordView.toJs()));
	}

	public linkLogin(parameters:{provider:string}) {
		return helper.fetchVoid('/api/authentication/link-external-login' + helper.getQueryString({provider: parameters.provider}), 'GET', null);
	}

	public linkLoginCallback(parameters:{}) {
		return helper.fetchVoid('/api/authentication/link-callback', 'GET', null);
	}

	public externalLogin(parameters:{provider:string; returnUrl:string}) {
		return helper.fetchVoid('/api/authentication/external-login' + helper.getQueryString({provider: parameters.provider, returnUrl: parameters.returnUrl}), 'GET', null);
	}

	public externalLoginCallback(parameters:{returnUrl:string}) {
		return helper.fetchVoid('/api/authentication/callback' + helper.getQueryString({returnUrl: parameters.returnUrl}), 'GET', null);
	}

	public getSendCodeT<T extends SendCodeView>(factory: (data:SendCodeViewData ) => T, parameters:{rememberMe:boolean}) {
		return helper.fetchSingleT('/api/authentication/send-code' + helper.getQueryString({rememberMe: parameters.rememberMe}), 'GET', factory, null);
	}

	public getSendCode = (parameters:{rememberMe:boolean}) => {
		return this.getSendCodeT(data => new SendCodeView(data), parameters);
	}

	public logOff(parameters:{}) {
		return helper.fetchVoid('/api/authentication/', 'DELETE', null);
	}

	public getExternalAuthenticationProvidersT<T extends AuthenticationDescription>(factory: (data:AuthenticationDescriptionData ) => T, parameters:{}) {
		return helper.fetchListT('/api/authentication/external-login-providers', 'GET', factory, null);
	}

	public getExternalAuthenticationProviders = (parameters:{}) => {
		return this.getExternalAuthenticationProvidersT(data => new AuthenticationDescription(data), parameters);
	}

	public getExternalLoginsT<T extends UserLoginInfo>(factory: (data:UserLoginInfoData ) => T, parameters:{}) {
		return helper.fetchListT('/api/authentication/external-logins', 'GET', factory, null);
	}

	public getExternalLogins = (parameters:{}) => {
		return this.getExternalLoginsT(data => new UserLoginInfo(data), parameters);
	}
}

export var authentication = new AuthenticationController();

export class RoleController {
	public getT<T extends RoleViewModel>(factory: (data:RoleViewModelData ) => T, parameters:{id:string}) {
		return helper.fetchSingleT('/api/role/' + parameters.id + '', 'GET', factory, null);
	}

	public get = (parameters:{id:string}) => {
		return this.getT(data => new RoleViewModel(data), parameters);
	}

	public getAllT<T extends RoleViewModel>(factory: (data:RoleViewModelData ) => T, parameters:{}) {
		return helper.fetchListT('/api/role/', 'GET', factory, null);
	}

	public getAll = (parameters:{}) => {
		return this.getAllT(data => new RoleViewModel(data), parameters);
	}

	public createT<T extends RoleViewModel>(factory: (data:RoleViewModelData ) => T, parameters:{name:string}) {
		return helper.fetchSingleT('/api/role/', 'POST', factory, JSON.stringify(parameters.name));
	}

	public create = (parameters:{name:string}) => {
		return this.createT(data => new RoleViewModel(data), parameters);
	}

	public delete(parameters:{id:string}) {
		return helper.fetchVoid('/api/role/' + parameters.id + '', 'DELETE', null);
	}

	public addUser(parameters:{roleName:string; userId:string}) {
		return helper.fetchVoid('/api/user/' + parameters.userId + '/role', 'POST', JSON.stringify(parameters.roleName));
	}

	public deleteUser(parameters:{roleName:string; userId:string}) {
		return helper.fetchVoid('/api/user/' + parameters.userId + '/role', 'DELETE', JSON.stringify(parameters.roleName));
	}

	public getForUser(parameters:{userId:string}) {
		return helper.fetchList<string>('/api/user/' + parameters.userId + '/role', 'GET', null);
	}
}

export var role = new RoleController();

export class AccountController {
	public changePassword(parameters:{view:ChangePasswordView}) {
		return helper.fetchVoid('/api/account/password', 'PUT', JSON.stringify(parameters.view.toJs()));
	}

	public setPassword(parameters:{model:SetPasswordView}) {
		return helper.fetchVoid('/api/account/password', 'POST', JSON.stringify(parameters.model.toJs()));
	}

	public setEmail(parameters:{model:SetEmailView}) {
		return helper.fetchVoid('/api/account/email', 'PUT', JSON.stringify(parameters.model.toJs()));
	}

	public getMeT<T extends AccountViewModel>(factory: (data:AccountViewModelData ) => T, parameters:{}) {
		return helper.fetchSingleT('/api/account/me', 'GET', factory, null);
	}

	public getMe = (parameters:{}) => {
		return this.getMeT(data => new AccountViewModel(data), parameters);
	}

	public getT<T extends AccountViewModel>(factory: (data:AccountViewModelData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/account/' + parameters.id + '', 'GET', factory, null);
	}

	public get = (parameters:{id:number}) => {
		return this.getT(data => new AccountViewModel(data), parameters);
	}

	public searchT<T extends AccountViewModel>(factory: (data:AccountViewModelData ) => T, parameters:{filter:UserSearchFilter; offset:number; limit:number; sortColumn:string}) {
		return helper.fetchListT('/api/account/search' + helper.getQueryString({offset: parameters.offset, limit: parameters.limit, sortColumn: parameters.sortColumn}), 'PUT', factory, JSON.stringify(parameters.filter.toJs()));
	}

	public search = (parameters:{filter:UserSearchFilter; offset:number; limit:number; sortColumn:string}) => {
		return this.searchT(data => new AccountViewModel(data), parameters);
	}

	public getUserRoles(parameters:{}) {
		return helper.fetchList<string>('/api/user/me/role', 'GET', null);
	}
}

export var account = new AccountController();

export class ChatController {
	public getAllT<T extends ChatView>(factory: (data:ChatViewData ) => T, parameters:{offset?:number}) {
		return helper.fetchListT('/api/chat/' + helper.getQueryString({offset: parameters.offset}), 'GET', factory, null);
	}

	public getAll = (parameters:{offset?:number}) => {
		return this.getAllT(data => new ChatView(data), parameters);
	}

	public getNewChats(parameters:{}) {
		return helper.fetchSingle<boolean>('/api/chat/new', 'GET', null);
	}

	public getT<T extends ChatView>(factory: (data:ChatViewData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/chat/' + parameters.id + '', 'GET', factory, null);
	}

	public get = (parameters:{id:number}) => {
		return this.getT(data => new ChatView(data), parameters);
	}

	public postT<T extends ChatView>(factory: (data:ChatViewData ) => T, parameters:{value:ChatView}) {
		return helper.fetchSingleT('/api/chat/', 'POST', factory, JSON.stringify(parameters.value.toJs()));
	}

	public post = (parameters:{value:ChatView}) => {
		return this.postT(data => new ChatView(data), parameters);
	}
}

export var chat = new ChatController();

export class CommentController {
	public getT<T extends CommentView>(factory: (data:CommentViewData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/comment/', 'GET', factory, null);
	}

	public get = (parameters:{id:number}) => {
		return this.getT(data => new CommentView(data), parameters);
	}

	public put(parameters:{id:number; value:CommentView}) {
		return helper.fetchVoid('/api/comment/' + parameters.id + '', 'PUT', JSON.stringify(parameters.value.toJs()));
	}
}

export var comment = new CommentController();

export class ForumController {
	public getAllT<T extends ForumView>(factory: (data:ForumViewData ) => T, parameters:{}) {
		return helper.fetchListT('/api/forum/', 'GET', factory, null);
	}

	public getAll = (parameters:{}) => {
		return this.getAllT(data => new ForumView(data), parameters);
	}

	public getNewMessages(parameters:{}) {
		return helper.fetchSingle<number>('/api/forum/new', 'GET', null);
	}

	public getT<T extends ForumView>(factory: (data:ForumViewData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/forum/' + parameters.id + '', 'GET', factory, null);
	}

	public get = (parameters:{id:number}) => {
		return this.getT(data => new ForumView(data), parameters);
	}

	public getByNameT<T extends ForumView>(factory: (data:ForumViewData ) => T, parameters:{name:string}) {
		return helper.fetchSingleT('/api/forum/' + parameters.name + '', 'GET', factory, null);
	}

	public getByName = (parameters:{name:string}) => {
		return this.getByNameT(data => new ForumView(data), parameters);
	}

	public postT<T extends ForumView>(factory: (data:ForumViewData ) => T, parameters:{value:ForumView}) {
		return helper.fetchSingleT('/api/forum/', 'POST', factory, JSON.stringify(parameters.value.toJs()));
	}

	public post = (parameters:{value:ForumView}) => {
		return this.postT(data => new ForumView(data), parameters);
	}

	public put(parameters:{id:number; value:ForumView}) {
		return helper.fetchVoid('/api/forum/' + parameters.id + '', 'PUT', JSON.stringify(parameters.value.toJs()));
	}

	public delete(parameters:{id:number}) {
		return helper.fetchVoid('/api/forum/' + parameters.id + '', 'DELETE', null);
	}
}

export var forum = new ForumController();

export class ImageController {
	public get(parameters:{imageId:number; format:string}) {
		return helper.fetchVoid('/api/image/' + parameters.imageId + '/' + parameters.format + '', 'GET', null);
	}

	public postFormDataT<T extends PhotoView>(factory: (data:PhotoViewData ) => T, parameters:{}) {
		return helper.fetchSingleT('/api/image/', 'POST', factory, null);
	}

	public postFormData = (parameters:{}) => {
		return this.postFormDataT(data => new PhotoView(data), parameters);
	}
}

export var image = new ImageController();

export class PrivateMessageController {
	public postT<T extends PrivateMessageView>(factory: (data:PrivateMessageViewData ) => T, parameters:{value:PrivateMessageView}) {
		return helper.fetchSingleT('/api/private-message/', 'POST', factory, JSON.stringify(parameters.value.toJs()));
	}

	public post = (parameters:{value:PrivateMessageView}) => {
		return this.postT(data => new PrivateMessageView(data), parameters);
	}

	public getT<T extends PrivateMessageView>(factory: (data:PrivateMessageViewData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/private-message/' + parameters.id + '', 'GET', factory, null);
	}

	public get = (parameters:{id:number}) => {
		return this.getT(data => new PrivateMessageView(data), parameters);
	}
}

export var privateMessage = new PrivateMessageController();

export class ThreadController {
	public getFromForumT<T extends ThreadView>(factory: (data:ThreadViewData ) => T, parameters:{forumId:number; offset?:number; limit?:number}) {
		return helper.fetchListT('/api/forum/' + parameters.forumId + '/thread' + helper.getQueryString({offset: parameters.offset, limit: parameters.limit}), 'GET', factory, null);
	}

	public getFromForum = (parameters:{forumId:number; offset?:number; limit?:number}) => {
		return this.getFromForumT(data => new ThreadView(data), parameters);
	}

	public getT<T extends ThreadFullView>(factory: (data:ThreadFullViewData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/thread/' + parameters.id + '', 'GET', factory, null);
	}

	public get = (parameters:{id:number}) => {
		return this.getT(data => new ThreadFullView(data), parameters);
	}

	public postT<T extends ThreadView>(factory: (data:ThreadViewData ) => T, parameters:{forumId:number; value:ThreadView}) {
		return helper.fetchSingleT('/api/forum/' + parameters.forumId + '/thread', 'POST', factory, JSON.stringify(parameters.value.toJs()));
	}

	public post = (parameters:{forumId:number; value:ThreadView}) => {
		return this.postT(data => new ThreadView(data), parameters);
	}

	public put(parameters:{id:number; value:ThreadView}) {
		return helper.fetchVoid('/api/thread/' + parameters.id + '', 'PUT', JSON.stringify(parameters.value.toJs()));
	}

	public delete(parameters:{id:number}) {
		return helper.fetchVoid('/api/thread/' + parameters.id + '', 'DELETE', null);
	}

	public getCommentsT<T extends CommentView>(factory: (data:CommentViewData ) => T, parameters:{threadId:number}) {
		return helper.fetchListT('/api/thread/' + parameters.threadId + '/comment', 'GET', factory, null);
	}

	public getComments = (parameters:{threadId:number}) => {
		return this.getCommentsT(data => new CommentView(data), parameters);
	}

	public postCommentT<T extends CommentView>(factory: (data:CommentViewData ) => T, parameters:{threadId:number; value:CommentView}) {
		return helper.fetchSingleT('/api/thread/' + parameters.threadId + '/comment', 'POST', factory, JSON.stringify(parameters.value.toJs()));
	}

	public postComment = (parameters:{threadId:number; value:CommentView}) => {
		return this.postCommentT(data => new CommentView(data), parameters);
	}

	public deleteComment(parameters:{threadId:number; id:number}) {
		return helper.fetchVoid('/api/thread/' + parameters.threadId + '/comment/' + parameters.id + '', 'DELETE', null);
	}
}

export var thread = new ThreadController();

export class PollChosenAnswerController {
	public getAnswerT<T extends PollChosenAnswerView>(factory: (data:PollChosenAnswerViewData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/poll-chosen-answer/' + parameters.id + '', 'GET', factory, null);
	}

	public getAnswer = (parameters:{id:number}) => {
		return this.getAnswerT(data => new PollChosenAnswerView(data), parameters);
	}

	public addAnswerT<T extends PollChosenAnswerView>(factory: (data:PollChosenAnswerViewData ) => T, parameters:{pollId:number; value:PollPossibleAnswerView}) {
		return helper.fetchSingleT('/api/poll/' + parameters.pollId + '/answer', 'POST', factory, JSON.stringify(parameters.value.toJs()));
	}

	public addAnswer = (parameters:{pollId:number; value:PollPossibleAnswerView}) => {
		return this.addAnswerT(data => new PollChosenAnswerView(data), parameters);
	}
}

export var pollChosenAnswer = new PollChosenAnswerController();

export class PollController {
	public getPollT<T extends PollView>(factory: (data:PollViewData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/poll/' + parameters.id + '', 'GET', factory, null);
	}

	public getPoll = (parameters:{id:number}) => {
		return this.getPollT(data => new PollView(data), parameters);
	}

	public getPollAndVoteT<T extends PollAndVoteView>(factory: (data:PollAndVoteViewData ) => T, parameters:{id:number}) {
		return helper.fetchSingleT('/api/poll/' + parameters.id + '/vote', 'GET', factory, null);
	}

	public getPollAndVote = (parameters:{id:number}) => {
		return this.getPollAndVoteT(data => new PollAndVoteView(data), parameters);
	}

	public getT<T extends PollView>(factory: (data:PollViewData ) => T, parameters:{}) {
		return helper.fetchListT('/api/poll/', 'GET', factory, null);
	}

	public get = (parameters:{}) => {
		return this.getT(data => new PollView(data), parameters);
	}

	public postT<T extends PollView>(factory: (data:PollViewData ) => T, parameters:{pollView:PollView}) {
		return helper.fetchSingleT('/api/poll/poll', 'POST', factory, JSON.stringify(parameters.pollView.toJs()));
	}

	public post = (parameters:{pollView:PollView}) => {
		return this.postT(data => new PollView(data), parameters);
	}

	public put(parameters:{id:number; pollView:PollView}) {
		return helper.fetchVoid('/api/poll/' + parameters.id + '', 'PUT', JSON.stringify(parameters.pollView.toJs()));
	}

	public delete(parameters:{id:number}) {
		return helper.fetchVoid('/api/poll/' + parameters.id + '', 'DELETE', null);
	}
}

export var poll = new PollController();

